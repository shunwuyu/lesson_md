// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request');
const cheerio = require('cheerio');

cloud.init({
  env: 'wedding-e3f751'
})
const db = cloud.database()
cheerio.prototype.removeTagText = function () {
  var html = this.html();
  return html.replace(/<.*>.*<\/.*>/g, (m) => {
    return ''
  })
}
const goodItemReq = new Promise((resolve, reject) => {
  request('http://www.smzdm.com/youhui/', (err, res) => {
    if (err) {
      reject(err);
    }
    if (!err) {
      // console.log(Object.keys(res))
      var body = res.body
      var $ = cheerio.load(body, {
        decodeEntities: false
      })
      let lists = [];
      $('.list.list_preferential').each((i, item) => {
        var $title = $('.itemName a', item)
        var url = $title.attr('href')
        var title = $title.removeTagText().trim()
        // 价格
        var hl = $title.children().text().trim()
        // 封面
        var img = $('img', item).attr('src')
        // html 获取里面的 html 内容 innerHTML
        // text 里面的文字
        var desc = $('.lrInfo', item).text().trim();
        // var descdiff = $('.lrInfo', item).text().trim();
        desc = desc.replace(/阅读全文/g, '');
        var mall = $('.botPart a.mall', item).text().trim();
        lists.push({ title, hl, url, img, desc, mall })
      })
      resolve(lists);
    }
  })
})
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const youhuiLists = await goodItemReq;
    const insertRes = await db.collection('smzdmYouhuiList').add({
      data: {
        youhui_list: youhuiLists
      }
    })
    console.log(insertRes, youhuiLists);
    return {
      code: 200,
      youhuiLists,
      insertResId: insertRes._id
    }
  }
  catch (err) {
    console.log(err);
    return {
      code: 500
    }
  }
}