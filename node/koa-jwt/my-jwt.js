const crypto = require("crypto");
let sign = crypto.createHmac('sha256', 'secret').update('zhaomeng').digest('base64');
console.log(sign);

const hello = 'hello';
const buf1 = Buffer.from(hello);
const base64 = buf1.toString('base64');
console.log('base64', base64);
const buf = Buffer.from(base64, 'base64')
console.log(buf.toString());