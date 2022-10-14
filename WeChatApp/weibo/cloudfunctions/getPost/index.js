// 云函数入口文件
const cloud = require('wx-server-sdk')
const db = cloud.database()
cloud.init({
  env: 'codingdream-74b4e5'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const postResult = await db
    .collection("poster")
    .orderBy("date", "desc")
    .get()
  const postData = postResult.data
  console.log(postData);
  postData.map(p => {
    p.author = '我'
    p.formatDate = new Date(p.date).toLocaleDateString("zh-Hans", options)
  })
  return postData
}