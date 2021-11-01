var crypto = require('crypto');
var md5 = crypto.createHash('md5');
var message = 'hello';
var digest = md5.update(message, 'utf8').digest('hex'); //编码
console.log(digest);