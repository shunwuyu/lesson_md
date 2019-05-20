const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');
const staticDir = './static/'

//用http模块创建一个http服务端
http.createServer(function (req, res) {
  const reqUrl = url.parse(req.url);
  console.log(req.url, req.method);
  if (/^\/static\//.test(req.url)) {
    staticServer(req, res);
    return false;
  }
  if (req.url == '/post' && req.method.toLowerCase() === 'get') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(
      `
      <form action="/post" enctype="application/x-www-form-urlencoded">
        name:<input type="text" name="name" />
        age: <input type="number" name="age" />
        <input type="submit" value="submit" />
      </form>
      `
    );
  }
  if (req.url == '/post' && req.method.toLowerCase() === 'post') {
    console.log('enter');
    let data = '';
    req.on('data', (chunk) => {
      console.log(chunk);
      data += chunk;
    })
    req.on('end', () => {
      data = data.toString();
      console.log('before parse', data);
      let body = querystring.parse(data);
      console.log('after parse', body);
      res.writeHead(200, {
        'Content-Type': 'application/json' });
      res.end(JSON.stringify(body));
    })
  }
}).listen(3000);

function staticServer(req, res) {
  const fileName = path.basename(req.url);
  const filePath = path.join(staticDir, fileName);
  fs.exists(filePath, exists => {
    if (!exists) {
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
          res.write(file, "binary");
          res.end();
        }
      });
    }
  })
}