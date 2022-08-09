const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const crypto = require('crypto');
http.createServer(function(req, res) {
    let { pathname } = url.parse(req.url, true);
    console.log(pathname)
    if (pathname === '/') {
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
        return ;
    }
    let abs = path.join(__dirname, pathname);
    fs.stat(path.join(__dirname, pathname), (err, stat) => {
      if(err) {
        res.statusCode = 404;
        res.end('Not Found')
        return
      }
      if(stat.isFile()) {
        //Etag 实体内容，他是根绝文件内容，算出一个唯一的值。
        let md5 = crypto.createHash('md5')
        let rs = fs.createReadStream(abs)
        let arr = []; // 你要先写入响应头再写入响应体
        rs.on('data', function(chunk) {
          md5.update(chunk);
          arr.push(chunk)
        })

        rs.on('end', function() {
          let etag = md5.digest('base64');
          if(req.headers['if-none-match'] === etag) {
            console.log(req.headers['if-none-match'])
            res.statusCode = 304;
            res.end()
            return
          }
          res.setHeader('Etag', etag)
          // If-None-Match 和 Etag 是一对， If-None-Match是浏览器的， Etag是服务端的
          res.end(Buffer.concat(arr))
        })
      }
    })
  }).listen(3000)
