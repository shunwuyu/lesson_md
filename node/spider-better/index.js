const request = require('request');
const cheerio = require('cheerio');

// <span>123</span> 去到内容
cheerio.prototype.removeTagText = function () {
  var html = this.html();
  return html.replace(/<.*>.*<\/.*>/g, (m) => {
    return ''
  })
}
request('http://www.smzdm.com/youhui/', (err, res)=>{
  
  if(!err){
    // console.log(Object.keys(res))
    var body = res.body
    var $ = cheerio.load(body, {
      decodeEntities: false
    })
    var lists = [];
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
      lists.push({title, hl, url, img, desc, mall})
    })
  }
})