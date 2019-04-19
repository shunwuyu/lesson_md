const fs = require('fs');
// fs.open('./a.txt', 'r', function(err, fd) {
//   //文件描述符
//   console.log(fd);
//   var buf = new Buffer(100);   //字节 abc
//   var offset = 0;
//   var len = buf.length;
//   var pos = 101;

//   fs.read(fd, buf, offset, len, pos, function(err, bytes, buffer) {
//     console.log('读取了' + bytes + ' bytes')
//     //数据已被填充到 buf 中
//     console.log(buf.slice(0, bytes).toString())
//   })
//   // fs.read(fd, buf, offset, len, pos, function(err, bytes, buffer) {
//   //   console.log('读取了' + bytes + ' bytes');
//   //   console.log(buf.slice(0, bytes).toString());
//   // })
//   // fs.close(fd, () => {
//   //   console.log('文件已关闭');
//   // })
// });
let data = new Buffer('Hi Juejin!');

// fs.writeFile('./b.txt', data, {
//   flag: 'w',
//   encoding: 'utf8'
// }, function(err) {

// });

// fs.open('./d.txt', 'a', function(err, fd) {
//   var buf = new Buffer('I Love Juejin')
//   var offset = 0
//   var len = buf.length
//   var pos = 100
//   // fs.write(fd, buf, offset, len, pos, function(err, bytes, buffer) {
//   //   console.log('写入了' + bytes + ' bytes')
//   //   console.log(buf.slice(0, bytes).toString())
//   //   fs.close(fd, function(err) {
//   //   })
//   // })
//   fs.write(fd, data, 0, 'utf-8', function(err, written, string) {
//     console.log(written)
//     console.log(string)
//     fs.close(fd, function(err) {})
//   })
// })

fs.open('music.png', 'r', function(err, fd) {
  var header = new Buffer([137, 80, 78, 71, 13, 10, 26, 10])
  var buf = new Buffer(8);
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes, buffer) {
    if (header.toString() === buffer.toString()) {
      console.log('是PNG图片');
    } else {
      console.log('不是PNG图片');
    }
  })
})