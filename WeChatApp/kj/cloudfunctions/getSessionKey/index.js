// 云函数入口文件
const cloud = require('wx-server-sdk');
const request = require('request');
const crypto = require('crypto');

cloud.init();
const db = cloud.database()
const getSessionKey = (code) => {
  const opt = {
    method: 'GET',
    url: 'https://api.weixin.qq.com/sns/jscode2session',
    qs: {
      appid: 'wx3750dcc09fa74c98',
      secret: '447aff4196ca9554c9b4396a72eb1229',
      js_code: code,
      grant_type: 'authorization_code'
    },
    json: true
  }
  return new Promise((resolve, reject) => {
    request(opt, (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    })
  })
}
// 云函数入口函数
exports.main = async(event, context) => {
  try {
    const {
      code,
      avatarUrl, city, country, gender, language, nickName, province
    } = event;
    const data = await getSessionKey(code);
    const {
      openid,
      session_key
    } = data;
    const findByOpenid = await db.collection('user')
      .where({
        openid
      })
      .get()
    console.log(findByOpenid);
    if (!findByOpenid.data.length) {
      const insertRes = await db.collection('user')
        .add({
          data: {
            openid,
            avatarUrl, city, country, gender, language, nickName, province
          }
        })
    }
    const skey = crypto.createHash('sha1')
      .update(session_key, 'utf8').digest('hex')
    return {
      skey
    }
  } catch (err) {
    return {
      err
    }
  }
}