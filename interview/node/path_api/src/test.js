const path = require('path');
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.dirname(__filename) + '/test.js');
console.log(path.join(__dirname, '../lib/common.js'));
console.log(path.resolve(__dirname, '../lib/common.js'));


// 区别
console.log(path.join("a","b"))
console.log(path.resolve("a", "b"))
//
console.log(path.join('/a', '/b'))
console.log(path.resolve('/a', '/b'))