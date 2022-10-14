const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

http.createServer((req, res) => {
    let { pathname } = url.parse(req.url, true);
    console.log(pathname);
    if (pathname === '/') {
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
        return ;
    }
    let abs = path.join(__dirname, pathname);
    fs.stat(path.join(__dirname, pathname), (err, stat) => {
        if(err) {
            res.statusCode = 404;
            res.end('Not Fount');
            return
        }
        if(stat.isFile()) {
            res.setHeader('Last-Modified', stat.ctime.toGMTString())
            console.log(stat.ctime.toGMTString())
            if(req.headers['if-modified-since'] === stat.ctime.toGMTString()) {
                
                console.log('if-modifined-since', req.headers['if-modified-since'])
                res.statusCode = 304;
                res.end()
                return
            }
            fs.createReadStream(abs).pipe(res)
        }
    })
}).listen(3000)
