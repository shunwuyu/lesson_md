const express = require('express')
const router = express.Router()
const User = require('../models/user.js')

router.post('/login', async (req, res) => {
  let {userName, userPwd} = req.body;
  const doc = await User.findOne({userName, userPwd});
  try {
    if (doc) {
      const {userId, name, avatar} = doc
      res.cookie("userId", userId, {
        path: '/',
        maxAge: 1000 * 60 * 60
      });
      res.json({
        status: '0',
        msg: '登陆成功',
        result: {
          name,
          avatar
        }
      })
    } else {
      res.json({
          status: '1',
          msg: '账号或者密码错误',
          result: ''
      })
    }
  } catch(e) {
    res.json({
      status: '1',
      msg: err.message,
      result: ''
    })
  }
})

router.post('/register', async (req, res) => {
  const {userName, userPwd} = req.body;
  console.log(userName, userPwd, '----------')
  try {
    const doc = await User.findOne({userName})
    if (doc) {
      res.json({
          status: '1',
          msg: '账号已存在!',
          result: ''
      })
    } else {
      // 不会重复
      let r1 = Math.floor(Math.random() * 10);
      let r2 = Math.floor(Math.random() * 10);
      let userId = `${r1}${(Date.parse(new Date())) / 1000}${r2}`
      console.log(userId)
      User.insertMany({
        avatar: 'https://pic.36krcnd.com//avatar/201808/23072546/i52qrvebe4om2j30.png!120',
        name: '未命名',
        userName,
        userId,
        userPwd
      })
      res.json({
        status: '0',
        msg: '注册成功',
        result: ''
      })
    }
  } catch(e) {
    res.json({
      status: '1',
      msg: err.message,
      result: ''
    })
  }
})
router.post('/userInfo', async (req, res) => {
  const {userId} = req.cookies
  console.log(userId);
  if (userId) {
    let {name, avatar} = await  User.findOne({userId})
    // console.log(name, avatar);
    // User.findOne({userId})
    //   .then(data => {
    //     console.log(data)
    //   })
    res.json({
        status: 0,
        msg: 'suc',
        result: {
            name,
            avatar
        }
    })
    } else {
        res.json({
            status: 1,
            msg: '未登录',
            result: ''
        })
    }
})

module.exports = router