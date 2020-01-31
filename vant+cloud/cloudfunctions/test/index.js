// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'wn-x28ea'

cloud.init()
const db = cloud.database({env})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await db.collection('todos').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      name: '蜗牛'
    }
  })
    .then(res => {
      console.log(res)
    })
    .catch(console.error)
}