const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');
const staticDir = './static/'

//用http模块创建一个http服务端
http.createServer(function (req, res) {
  const reqUrl = url.parse(req.url);
  console.log('请求对象', req.url, querystring.parse(reqUrl.query));
  // if (req.url.includes('/static/')) {
  if (/^\/static\//.test(req.url)) {
    staticServer(req, res);
    return false;
  }
  if (req.url == '/post' && req.method.toLowerCase() === 'get') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(
      `
      <form action="" enctype="application/x-www-form-urlencoded">
        name:<input type="text" name="name" />
        age: <input type="number" name="age" />
        <input type="submit" value="submit" />
      </form>
      `
    );
  }
  if (req.url == '/upload' && req.method.toLowerCase() === 'get') {
    //显示一个用于文件上传的form
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(
      '<form action="/upload" enctype="multipart/form-data" method="post">' +
      '<input type="file" name="upload" multiple="multiple" />' +
      '<input type="submit" value="Upload" />' +
      '</form>'
    );
  } else if (req.url == '/upload' && req.method.toLowerCase() === 'post') {
    if (req.headers['content-type'].indexOf('multipart/form-data') !== -1)
      parseFile(req, res)
  } else {
    res.end('其它提交方式');
  }
}).listen(3000);
function parseFile(req, res) {
  req.setEncoding('binary');
  var body = '';   // 文件数据
  var fileName = '';  // 文件名
  // 边界字符串
  // multipart/form-data; boundary=----WebKitFormBoundaryVSc4sgOfhMSnHPRQ
  var boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '');
  req.on('data', function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    // 用于在查询字符串中分隔键值对的子字符串。默认值: '&'
    // 用于在查询字符串中分隔键和值的子字符串。默认值: '='
    // 回车 (\r) 本义是光标重新回到本行开头
    // 换行 (\n) 本义是光标往下一行（不一定到下一行行首）
    var file = querystring.parse(body, '\r\n', ':')
    // console.log(file);

    // 只处理图片文件
    if (file['Content-Type'].indexOf("image") !== -1) {
      //获取文件名
      var fileInfo = file['Content-Disposition'].split('; ');
      console.log('fileInfo', fileInfo);
      // 
      for (value in fileInfo) {
        // 找到 fileName
        if (fileInfo[value].indexOf("filename=") != -1) {
          console.log('filename', fileInfo[value]);
          // filename="ren.png"
          fileName = fileInfo[value].substring(10, fileInfo[value].length - 1);
          // \\
          if (fileName.indexOf('\\') != -1) {
            fileName = fileName.substring(fileName.lastIndexOf('\\') + 1);
          }
          console.log("文件名: " + fileName);
        }
      }

      // 获取图片类型(如：image/gif 或 image/png))
      var entireData = body.toString();
      // var contentTypeRegex = /Content-Type: image\/.*/;

      contentType = file['Content-Type'].substring(1);

      //获取文件二进制数据开始位置，即contentType的结尾 image/png
      var upperBoundary = entireData.indexOf(contentType) + contentType.length;
      console.log('upperBoundary', upperBoundary);
      // 从 content-type 位置 截取
      var shorterData = entireData.substring(upperBoundary);

      // 替换开始位置的空格
      // var binaryDataAlmost = shorterData.replace(/^\s*/, '').replace(/\s*$/, '');
      var binaryDataAlmost = shorterData.trim();

      // 去除数据末尾的额外数据，即: "--"+ boundary + "--"
      var binaryData = binaryDataAlmost.substring(0, binaryDataAlmost.indexOf('--' + boundary + '--'));

      // 保存文件
      fs.writeFile(staticDir + fileName, binaryData, 'binary', function (err) {
        res.end('图片上传完成');
      });
    } else {
      res.end('只能上传图片文件');
    }
  });
}
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