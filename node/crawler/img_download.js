const https = require('https');
const fs = require('fs');
const url = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg';
const url1 = 'https://leancloud-gold-cdn.xitu.io/362ee93999bd1194c5f9.png?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1';

https.get(url1, (res) => {
  // 可读流
  res.setEncoding('binary');
  let data = [];
  // res.on('data', (chunk) => {
  //   data += chunk;
  // })
  // res.on('end', () => {
  //   console.log(data)
  //   fs.createReadStream().pipe(
  //     fs.createWriteStream('./img-download/cat-2083492_960_720.jpg')
  //   )
  // })
  console.log(res);
  res.pipe(fs.createWriteStream('./img-download/cat-2083492_960_720.jpg'))
})
fs.createReadStream('./img/p1014542496.jpg')
.pipe(
  fs.createWriteStream('./img-download/p1014542496.jpg')
)
// fs.createReadStream(url).pipe(fs.createWriteStream('./img-download/cat-2083492_960_720.jpg'));