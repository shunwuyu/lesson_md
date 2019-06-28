
var spider = require('./lib/spider')

spider('http://www.smzdm.com/youhui/', (err, data, body, req) => {
  if (!err) {
    // console.log(data)
  }
}, {
  items: {
    selector: '.list.list_preferential',
    handler: {
      title: {
        selector: '.itemName a',
        handler: 'removeTagText'
      },
      ht: {
        selector: '.itemName a span',
        handler: 'text'
      },
      url: {
        selector: '.itemName a',
        handler: 'attr:href'
      },
      img: {
        selector: 'img',
        handler: 'attr:src'
      },
      mall: {
        selector: '.botPart a.mall',
        handler: 'text'
      },
      desc: {
        selector: '.lrInfo',
        handler: function ($data) {
          return $data.html().replace(/<a\b.+?>阅读全文<\/a>/g, '').trim()
        }
      }
    }
  }})
