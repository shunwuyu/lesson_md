const http = require('http')
const fs = require('fs');
let server = http.createServer((req, res) => {
  //修改文件相比较
  // console.log(req.url, req.headers['if-modified-since'])
  var stat = fs.statSync('./a.txt');
  if(req.headers['if-modified-since']){
    if (req.headers['if-modified-since'] == stat.mtime) {
      res.statusCode = 304
      res.end()
    } else {
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
      res.end('修改了')
    }
    // console.log(stat, '+++++++++++');
  }else {
    res.setHeader('Last-Modified', stat.mtime)
    res.end('harttle.land')
  }
})

console.log('server start at http://localhost:3333')
server.listen(3333)