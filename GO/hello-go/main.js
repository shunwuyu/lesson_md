const fs = require('fs');
const https = require('https');
fs.writeFile('a.txt', 'hello world', function(err) {
  if (err) {
    console.log('文件操作失败')
  }
})

console.log(
  "123lafaldsjglad123lkfasdf123djfal123lkdjga123lksjfla123l"
    .replace(/123/g, '888')
);

console.log("I&love&Go,&and&I&also&love&Python.".split('&'));

// fetch('https://book.douban.com/top250?start=0', {
//   "User-Agent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
// }).then(data => data.json())
// .then(data => {
//   console.log(data)
// })

https.get('https://book.douban.com/top250?start=0', {
  "User-Agent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
}, (res) => {
  res.on('data', (d) => {
    process.stdout.write(d);
  });

})