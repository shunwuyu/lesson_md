// request-txt.js
const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
  res.writeHeader(200, {'Content-Type': 'application/pdf'})
  // 1. 把文件内容全部读入内存
  fs.readFile('./js.pdf', (err, data) => {
    // 2. 通过 res 批量返回
    res.end(data)
  })
}).listen(5000)