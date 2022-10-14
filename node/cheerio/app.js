let request = require('request-promise')
let cheerio = require('cheerio') 
let fs = require('fs');
let url = 'https://movie.douban.com/top250';
let movies = [];

const main = async () => {
  let html = await request({
    url
  });
  let $ = cheerio.load(html)
  let movieNodes = $('#content .article .grid_view').find('.item')
  // console.log(movieNodes);
  for (let i = 0; i < movieNodes.length; i++) {
    let item = cheerio.load(movieNodes[i]);
    // console.log(item);
    let titles = $('.info .hd span')
    titles = ([]).map.call(titles, t => {
      return $(t).text()
    })
    let bd = $('.info .bd')
    let info = bd.find('p').text()
    let score = bd.find('.star .rating_num').text()
    // console.log(titles);
    if (titles)
      movies.push({ titles, info, score })
  }
  // console.log(movies);
  fs.writeFile('./output.json', JSON.stringify(movies), 'utf-8', () => {
    console.log('生成json文件成功！')
  })
}
main();
