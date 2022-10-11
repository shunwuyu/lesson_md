const express = require('express');
const app = express();
const port = 3001;
const fs = require('fs');
const path = require('path');
const md5 = require('md5');
let a = 0;
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        demo1
        <script src="/demo.js"></script>
    </body>
    </html>`)
})
app.get('/balance', (req, res) => {
  res.send({
    a: 1
  })
  throw new Error(123);
})
app.get('/demo.js', (req, res) => {
  console.log('request here  +++++++', a ++);
  let jsPath = path.resolve(__dirname, './static/js/demo.js');
  let cont = fs.readFileSync(jsPath);
  // console.log(cont);
  // let oneMinuteLater = Date.now() + 1000 * 60 * 2; // 2分钟
  // // console.log(oneMinuteLater);
  // let GMT = (new Date(oneMinuteLater)).toGMTString();
  // console.log(GMT, '---------------')
  // 2
  // 30s 之内 受 Cache-Control 控制  强
  let status = fs.statSync(jsPath)

  let lastModified = status.mtime.toUTCString()
  // console.log(lastModified, '---------------')
  let etag = md5(cont);
  // console.log(req.headers['if-none-match'], '------');
  if (req.headers['if-none-match'] === etag) {
    res.setHeader('ETag', etag);
    res.writeHead(304, 'Not Modified');
    console.log('进协商缓存')
    res.end();
    return;
  }
  // if (lastModified === req.headers['if-modified-since']) {
  //   res.writeHead(304, 'Not Modified')
  //   res.end()
  //   return;
  // }
  console.log('refresh cache')
  res.setHeader('Cache-Control', 'public,max-age=30')
  res.setHeader('Last-Modified', lastModified)
  res.setHeader('ETag', etag);
  res.writeHead(200, 'OK')
  res.end(cont)
})

app.listen(port, () => {
  console.log(`listen on ${port}`)
})
