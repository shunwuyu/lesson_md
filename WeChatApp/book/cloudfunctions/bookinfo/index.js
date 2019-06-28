var rp = require('request-promise')

// 云函数入口函数
exports.main = async (event, context) => {
  var res = rp('https://api.douban.com/v2/book/isbn/' + event.isbn).then(html => {
    return html;
  }).catch(err => {
    console.log(err);
  })
  return res;
}