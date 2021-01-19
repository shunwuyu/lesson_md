const fs = require('fs');
fs.readFile('./readme.md', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
}); // 代码不会因为读文件阻塞，会继续执行后面的代码
console.log("Hello, Fundebug!");