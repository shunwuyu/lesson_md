var http = require('http');
var fs = require('fs');
var SparkMD5 = require('./spark-md5.min.js')
const spark = new SparkMD5.ArrayBuffer();
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
    fs.readFile('./cache.jpeg', async (err, file) => {
        // console.log(req.headers);
        // console.log(req.url)
        spark.append(file)
        let hash = spark.end();
        
        if (!req.headers['if-none-match']) {
            res.setHeader('Cache-Control', "max-age=" + 5);
            res.setHeader('Content-Type', 'images/jpeg');
            res.setHeader('Etag', hash);
            res.writeHead('200', "Not Modified");
            res.end(file);
        } else {
            if (req.headers['if-none-match'] === hash) {
                res.writeHead('304', "Not Modified");
                res.end();
            } else {
                res.setHeader('Cache-Control', "max-age=" + 5);
                res.setHeader('Content-Type', 'images/png');
                res.setHeader('Etag', hash);
                res.writeHead('200', "Not Modified");
                res.end(file);
            }
        }
    });
}
  
}).listen(8888)


// const gethash = (file) => {
//   return new Promise((resolve, reject) => {
//     const spark = new SparkMD5.ArrayBuffer();
//     spark.append(e.target.result);
//     resolve(spark.end())
//   })
// } 

async(file) => {
  
}