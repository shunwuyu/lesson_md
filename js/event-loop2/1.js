const fs = require('fs');
const data = fs.readFileSync('./readme.md'); // 文件读取完成之前，代码会阻塞，不会执行后面的代码
console.log("Hello, Fundebug!");