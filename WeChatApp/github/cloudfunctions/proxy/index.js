// 云函数入口文件
const axios = require('axios')
const cloud = require('wx-server-sdk')
cloud.init()

axios.defaults.validateStatus = () => true

// 云函数入口函数
exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {
    axios(event).then(({ status, headers, data }) => {
      resolve({ status, headers, data})
    }).catch(error => {
      reject(error)
    })
  })
}