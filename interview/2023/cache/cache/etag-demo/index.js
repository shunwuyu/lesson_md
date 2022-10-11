// https://juejin.cn/post/6844903810393964551
const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

http.createServer((req, res) => {
    let { pathname } = url.parse(req.url, true);
    if (pathname === '/') {
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
        return ;
    }
    console.log(pathname)
    let abs = path.join(__dirname, pathname);
    res.setHeader('Cache-Control', 'max-age=20')
    // res.setHeader('Expires', new Date(Date.now() + 200000).toGMTString());
    fs.stat(path.join(__dirname, pathname), (err, stat) => {
        if(err) {
            res.statusCode = 404;
            res.end('not found')
            return
        }
        if(stat.isFile()) {
            fs.createReadStream(abs).pipe(res)
        }
    })
}).listen(3000)