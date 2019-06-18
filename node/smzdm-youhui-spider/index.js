const request = require('request');
const cheerio = require('cheerio');

request('https://www.smzdm.com/youhui/', (err, res) => {
  if (!err) {
    // console.log(res.body);
    // decodeEntities 要不要解析 html entity
    const $ = cheerio.load(res.body, {
      decodeEntities: false
    })
    $('.list.list_preferential').each(function() {
      // 限制
      // innerHTml 
      let title = $('.itemName a', this).html();
      // <span>44元</span>
      title = title.replace(/<.*>.*<\/.*>/g, '');
      const price = $('.listTitle .red', this).text();
      const img = $('.picLeft img', this).attr('src');
      const desc = $('.lrInfo', this).text().trim();
      console.log({
        title, price, img, desc
      });
    })

  }
})