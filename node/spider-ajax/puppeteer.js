const $ = require('cheerio')
const puppeteer = require('puppeteer')
const url = 'https://juejin.im/books'

async function run () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  // networkidle0 - 不再有网络连接时触发（至少500毫秒后）
  // networkidle2 - 只有2个网络连接时触发（至少500毫秒后）
  await page.goto(url, {waitUntil: 'networkidle0'})
  const html = await page.content()
  const books = $('.info', html)
  let totalSold = 0
  let totalSale = 0
  let totalBooks = books.length
  books.each(function() {
    const book = $(this)
    const price = $(book.find('.price-text')).text().replace('￥', '')
    const count = book.find('.message').last().find('span').text().split('人')[0]
    totalSale += Number(price) * Number(count)
    totalSold += Number(count)
  })

  console.log(
    `共 ${totalBooks} 本小册子`, 
    `共 ${totalSold} 人次购买`,
    `约 ${Math.round(totalSale / 10000)} 万`
  )

  await browser.close()
}

run()