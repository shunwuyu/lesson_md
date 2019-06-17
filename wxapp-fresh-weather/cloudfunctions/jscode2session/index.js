// 云函数入口文件
const API_URL = 'https://api.weixin.qq.com/sns/jscode2session'
const request = require('request')
const querystring = require('querystring')
const WECHAT_APPID = 'wxb4f81593a94bd872'
const WECHAT_APP_SECRET = 'b327a1702bddd5e1c5f55811bed662e7' //密钥
const $ = {
  getWechatAppConfig: () => {
    return {
      id: WECHAT_APPID,
      sk: WECHAT_APP_SECRET
    }
  }
}
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let { code } = event
  let { id, sk } = $.getWechatAppConfig()
  const data = {
    appid: id,
    secret: sk,
    js_code: code,
    grant_type: 'authorization_code'
  }
  let url = API_URL + '?' + querystring.stringify(data)
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        reject(error)
      } else {
        try {
          const r = JSON.parse(body)
          resolve(r)
        } catch (e) {
          reject(e)
        }
      }
    })
  })
}