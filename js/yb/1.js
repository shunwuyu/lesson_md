// node 内置fs 模块
const fs = require('fs');
// 出错，  编码
fs.readFile('./hlm.txt', 'utf-8', function(err, data) {
    console.log(data);
})
// 异步
console.log('---------');