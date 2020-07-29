const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const moment = require("moment")
const jwt = require("jsonwebtoken")
const QRCodeNode = require("qrcode");
const { UserModel, QRCodeModel } = require("./models")
const cors = require('cors')
const app = express()
const port = 8888

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const authenticated = async (req, res, next) => {
  console.log(req.headers['authorization']);
  const authorationToken = req.headers['authorization']
  const decoded = decryptToken(authorationToken, 's3cret')
  // console.log(decoded, '-------------------------');
  if (!decoded) {
    res.send({
      code: 403,
      message: '请先登录'
    })
    return
  }
  req.logged = true
  req.user = {
    userId: decoded.data.userId,
    username: decoded.data.username,
    avatar: decoded.data.avatar,
    token: authorationToken
  }
  // console.log(req.user);
  await next()
}

app.get('/qrcode/gene', async (req, res) => {
  const qrcode = new QRCodeModel({
    createdAt: Date.now(),
    expireAt: moment(Date.now()).add(120, 's').toDate(),
  })
  await qrcode.save()

  let qrcodeData = {
    qrcodeId: qrcode._id,
    createdAt: qrcode.createdAt,
    expireAt: qrcode.expireAt,
  }
  const qrcodeUrl = await QRCodeNode.toDataURL(JSON.stringify(qrcodeData));
  res.send({
    code: 200,
    message: '生成二维码成功',
    data: {
      qrcodeId: qrcode._id,
      qrcodeUrl
    }
  })
})

// 二维码状态查询接口
app.get('/qrcode/check', async (req, res) => {
  const { qrcodeId } = req.query;
  const qrcode = await QRCodeModel.findOne({ _id: qrcodeId })
  if (!qrcode) {
    res.send({
      code: 2241,
      message: '二维码不存在',
      data: null
    })
    return
  }

  res.send({
    code: 200,
    message: '查询二维码状态成功',
    data: {
      qrcodeId,
      scanned: qrcode.scanned,
      expired: moment() >= moment(qrcode.expireAt),
      success: qrcode.status === 1,
      canceled: qrcode.status === -1,
      status: qrcode.status,
      userInfo: qrcode.userInfo,
      ticket: qrcode.ticket,
    }
  })
})

// 标记二维码已扫描接口
app.post('/qrcode/scanned', authenticated, async (req, res) => {
  // console.log(req.body, '+++++++++++++++++++');
  const { qrcodeId }  = req.body;
  const qrcode = await QRCodeModel.findOne({ _id: qrcodeId })
  // console.log(qrcode, '++++++++++++++')
  if (!qrcode) {
    res.send({
      code: 2241,
      message: '二维码不存在',
      data: null
    })
    return
  }

  await QRCodeModel.findOneAndUpdate({ _id: qrcodeId }, {
    scanned: true, userInfo: {
      username: req.user.username,
      avatar: req.user.avatar
    }
  })

  res.send({
    code: 200,
    message: '扫码成功'
  })
})

// 同意授权接口
app.get('/qrcode/confirm', async (req, res) => {

})

// 取消授权接口
app.get('/qrcode/cancel', async (req, res) => {

})

function generateToken(data, secret) {
  let iat = Math.floor(Date.now() / 1000);
  let exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 15;
  let token = jwt.sign(
    {
      data,
      iat,
      exp,
    },
    secret,  
  );
  return token
}

function decryptToken(token, secret) {
  try {
    token = token.replace('Bearer ', '')
    let res = jwt.verify(token, secret);
    return res;
  } catch (err) {
    return false;
  }
}

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await UserModel.findOne({
    username,
    password
  })
  
  if (!user) {
    res.send({
      code: 403,
      message: '用户名密码不正确'
    })
    return
  }

  const token = generateToken({ userId: user._id, username, avatar: user.avatar }, "s3cret")
  res.send({
    code: 200,
    message: '登录成功',
    data: {
      _id: user._id,
      username,
      token
    }
  })
})

app.post('/register', async (req, res) => {
  const { username, password } = req.body
  if ((await UserModel.findOne({ username, password }))) {
    res.send({
      code: 500,
      message: '用户名已被注册'
    })
    return
  }

  const user = new UserModel({
    username,
    password,
    avatar: "https://usercontents.authing.cn/authing-avatar.png"
  })
  await user.save()
  res.send({
    code: 200,
    message: '注册成功'
  })
})

connect();
function listen() {
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);
  
  return mongoose.connect('mongodb://localhost:27017/scan-qrcode', { keepAlive: 1, useNewUrlParser: true });
}
