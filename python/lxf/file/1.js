const fs = require('fs');


// fs.readFile('test.txt', function (err, data) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log("异步读取: " + data.toString());
// });

// var data = fs.readFileSync('test.txt');
// console.log("同步读取: " + data.toString());
try {
  var data = fs.readFileSync('tesssst.txt');
  console.log("同步读取: " + data.toString());
} catch(err) {
  console.log('-------');
};

