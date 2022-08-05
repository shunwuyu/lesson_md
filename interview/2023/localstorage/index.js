const CryptoJS  = require('crypto-js');

let val = {
    name: '林三费',
    id: 888666,
    time: Date.now(),
    expire: 5000
}

var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(val), '1234567890').toString();
// console.log(ciphertext);
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, '1234567890');
console.log(JSON.parse(bytes.toString(CryptoJS.enc.Utf8)));