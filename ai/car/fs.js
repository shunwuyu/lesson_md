var fs = require('fs');

fs.readFile('textdd.txt', function(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("异步读取：" + data.toString());
})

// var data = fs.readFileSync('text.txt');
// console.log("同步读取: " + data.toString());

