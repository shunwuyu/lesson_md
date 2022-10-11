var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
  if (req.url === '/' || req.url === '' || req.url === '/index.html') {
    fs.readFile('./index.html', function(err, file) {
      console.log(req.url)
      //对主文档设置缓存，无效果
      res.setHeader('Cache-Control', "no-cache, max-age=" + 5);
      res.setHeader('Content-Type', 'text/html');
      res.writeHead('200', "OK");
      res.end(file);
    });

    
  }

  if (req.url === '/cache.jpeg') {
    fs.readFile('./cache.jpeg', function(err, file) {
        console.log(req.headers);
        // console.log(req.url)
        if (!req.headers['if-none-match']) {
            res.setHeader('Cache-Control', "max-age=" + 5);
            res.setHeader('Content-Type', 'images/jpeg');
            res.setHeader('Etag', "ffff");
            res.writeHead('200', "Not Modified");
            res.end(file);
        } else {
            if (req.headers['if-none-match'] === 'ffff') {
                res.writeHead('304', "Not Modified");
                res.end();
            } else {
                res.setHeader('Cache-Control', "max-age=" + 5);
                res.setHeader('Content-Type', 'images/png');
                res.setHeader('Etag', "ffff");
                res.writeHead('200', "Not Modified");
                res.end(file);
            }
        }
    });
}
  
}).listen(8888)
