// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const API_URL = 'https://free-api.heweather.net/s6/weather'
const request = require('request')

const $ = require('../../inline/utils')


// 云函数入口函数
exports.main = async (event) => {
  const { lat, lon } = event
  // let location = `${lat},${lon}`
  // let params = {
  //   location,
  //   key: '090a749ca3b14965841733ac93615fe4' //和风天气中应用的密钥
  // }
  // let query = []
  // for (let i in params) {
  //   query.push(`${i}=${encodeURIComponent(params[i])}`)
  // }
  // let url = API_URL + '?' + query.join('&')
  let url = API_URL + '/now' + '?' + 'location=beijing&key=090a749ca3b14965841733ac93615fe4'

  // console.log(url)
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        reject(error)
      } else {
        try {
          let rs = $.handlerData(JSON.parse(body))
          resolve(rs)
        } catch (e) {
          reject(e)
        }
      }
    })
  })
}
