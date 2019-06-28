const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
const mime = require('mime');
const { header, footer } = require('./template/index.js');
const staticDir = './static/'

http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return false;
  if (/^\/static\//.test(req.url)) {
    staticServer(req, res);
    return false;
  }

}).listen(9090, () => {
  console.log('static server is running 9090');
});
function setMime(req, res) {
  var urlObj = url.parse(req.url);
  var urlPathname = urlObj.pathname;
  var ext = path.parse(urlPathname).ext;
  var mimeType = mime.getType(ext);
  res.writeHead(200, { "Content-Type": mimeType });
}
function staticServer(req, res) {
  let url  = req.url;
  // 编码
  url = decodeURI(url);
  if (url === '/static/') {
    url += 'index.html'
  }
  const fileName = path.basename(url);
  // /static/jd-campus.gif jd-campus.gif
  console.log(url, fileName);
  const filePath = path.join(__dirname, staticDir, fileName);
  fs.exists(filePath, exists => {
    if (!exists && fileName === 'index.html') {
      listFiles(req, res);
    }
    else if (!exists) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("This request URL ' " + filePath + " ' was not found on this server.");
      res.end();
    } else {
      // 当文件存在时
      fs.readFile(filePath, "binary", (err, file) => {
        if (err) {
          // 文件读取出错
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end(err);
        } else {
          // 当文件可被读取时，输出文本流
          setMime(req, res);
          res.write(file, "binary");
          res.end();
        }
      });
    }
  })
}
function listFiles(req, res) {
  fs.readdir(staticDir, (err, files) => {
    console.log(files);
    const pureFile = files.filter(file => {
      const fileStat = fs.statSync(path.join(staticDir, file));
      return fileStat.isFile();
    });
    setMime(req, res);
    res.end(`
    ${header}
    ${
      pureFile.map(file => `
      <li><a href="./${file}">${file}</a></li>
      `).join('')
    }
    ${footer}
    `)
  })
}
