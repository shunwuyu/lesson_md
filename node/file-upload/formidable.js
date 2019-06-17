var formidable = require('formidable'),
  http = require('http'),
  path = require('path'),
  fs = require('fs');
  util = require('util');

http.createServer(function (req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = "./static/";
    form.parse(req, function (err, fields, files) {
      console.log(files.upload.path);
      var oldpath = files.upload.path;
      console.log(oldpath, path.dirname(oldpath), files.upload.name);
      // static/upload_fd5a4d3d84dceadf8f1beccef24d786e.png
      // dirname === static 返回 path 的目录名
      // path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径
      var newpath = path.join(path.dirname(oldpath), files.upload.name);
      console.log('newpath', newpath);
      fs.rename(oldpath, newpath, (err) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html;charset=UTF8" });
        res.end('图片上传并改名成功！');
      })
    });

    return;
  }

  // show a file upload form
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input type="text" name="title"><br>' +
    '<input type="file" name="upload" multiple="multiple"><br>' +
    '<input type="submit" value="Upload">' +
    '</form>'
  );
}).listen(8080);