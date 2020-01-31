// juejin-book.js
// 在 node juejin-book.js 执行代码之前
// 先 npm i cheerio request-promise 安装依赖模块
const $ = require('cheerio')
const rp = require('request-promise')
const url = 'https://juejin.im/books'

// 通过 request-promise 来爬取网页
rp(url)
  .then(function(html) {
    // 利用 cheerio 来分析网页内容，拿到所有小册子的描述
    const books = $('.info', html)
    let totalSold = 0
    let totalSale = 0
    let totalBooks = books.length
    // 遍历册子节点，分别统计它的购买人数，和销售额总和
    books.each(function() {
      const book = $(this )
      const price = $(book.find('.price-text')).text().replace('￥', '')
      const count = book.find('.message').last().find('span').text().split('人')[0]
      totalSale += Number(price) * Number(count)
      totalSold += Number(count)
    })

    // 最后打印出来
    console.log(
      `共 ${totalBooks} 本小册子`, 
      `共 ${totalSold} 人次购买`,
      `约 ${Math.round(totalSale / 10000)} 万`
    )
  })