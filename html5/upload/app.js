var fs = require('fs');
var express = require('express');
// 文件上传功能包
var multer = require('multer')
var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      // 接收到文件后输出的保存路径（若不存在则需要创建）
      cb(null, 'upload/');    
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);  
  }
});

var app = express();
var upload = multer({
  storage: storage
});

// 单图上传
//multer有single()中的名称必须是表单上传字段的name名称。
app.post('/upload', upload.single('pic'), function(req, res, next) {
    
    var file = req.file;
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);

    res.send({
        ret_code: '0'
    });
});

app.get('/', function(req, res, next) {
    var form = fs.createReadStream(path.join(__dirname, '/index.html'));
    form.pipe(res);
    // res.send(form);
});

app.listen(3000);