const fs = require('fs');
// 出错，  编码
fs.readFile('./a.txt', 'utf-8', function(err, data) {
    console.log(data);
    fs.readFile('./b.txt', 'utf-8', function(err, data) {
        console.log(data);
        fs.readFile('./c.txt', 'utf-8', function(err, data) {
            console.log(data);
        })
    })
})