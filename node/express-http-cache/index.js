const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const path = require('path');
const md5 = require('md5');

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        Http Cache Demo
        <script src="/demo.js"></script>
    </body>
    </html>`)
})

app.get('/demo.js', (req, res) => {
  console.log('request here');
  let jsPath = path.resolve(__dirname, './static/js/demo.js');
  let cont = fs.readFileSync(jsPath);
  let oneMinuteLater = Date.now() + 1000 * 60 * 2; // 2分钟
  let GMT = (new Date(oneMinuteLater)).toGMTString();
  // 1
  // 2s later request
  // res.setHeader('Expires', GMT);
  // res.setHeader('Cache-Control', 'public,max-age=120') //2分钟
  // res.end(cont)

  // 2
  // 30s 之内 受 Cache-Control 控制  强
  // 过后 if-modified-since 控制  协商
  let status = fs.statSync(jsPath)

  let lastModified = status.mtime.toUTCString()
  let etag = md5(cont);

  if (req.headers['if-none-match'] === etag) {
    res.writeHead(304, 'Not Modified');
    res.end();
    return;
  }
  if (lastModified === req.headers['if-modified-since']) {
    res.writeHead(304, 'Not Modified')
    res.end()
    return;
  }
  console.log(222222222222);
  res.setHeader('Cache-Control', 'public,max-age=30')
  res.setHeader('Last-Modified', lastModified)
  res.setHeader('ETag', etag);
  res.writeHead(200, 'OK')
  res.end(cont)
})

app.listen(port, () => {
  console.log(`listen on ${port}`)
})
