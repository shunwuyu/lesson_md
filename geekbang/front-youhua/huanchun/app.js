const http = require('http')
// 如何得到这个时间
// let server = http.createServer((req, res) => {
//   res.setHeader('Expires', new Date().toGMTString())
//   res.end('harttle.land')
// })

// Cache-Control
// let server = http.createServer((req, res) => {
//   res.setHeader('Cache-Control', 'public, max-age=86400')
//   res.end('harttle.land')
// })
// Etag是属于HTTP 1.1属性，它是由服务器生成返回给前端，
// 当你第一次发起HTTP请求时，服务器会返回一个Etag，
// 并在你第二次发起同一个请求时，客户端会同时发送一个If-None-Match，而它的值就是Etag的值（此处由发起请求的客户端来设置）。
// let server = http.createServer((req, res) => {
//   console.log(req.url, req.headers['if-none-match'])
//   if(req.headers['if-none-match']) {
//     res.statusCode = 304
//     res.end()
//   }else {
//     res.setHeader('Etag', '12345678')
//     res.end('harttle.land')
//   }
// })

// Last-Modified
let server = http.createServer((req, res) => {
  //修改文件相比较
  console.log(req.url, req.headers['if-modified-since'])
  if(req.headers['if-modified-since']){
    res.statusCode = 304
    res.end()
  }else {
    res.setHeader('Last-Modified', new Date().toISOString())
    res.end('harttle.land')
  }
})

console.log('server start at http://localhost:3333')
server.listen(3333)