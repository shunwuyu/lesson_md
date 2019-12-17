// const phoneReg = /1[0-9]{10}/;
const phoneReg = /1\d{10}/;
// console.log(phoneReg.test('1597041417')); false 
console.log(phoneReg.test('15970414178'));
// const phoneReg = /^1\d{10}$/;
// console.log(phoneReg.test('aaaa15970414178zzzzz'));  ^ $
// const emailReg = //
// const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
emailReg = /^\w+@\w+(\.[\w]+)+$/
console.log(emailReg.test('7_5-4211506@qq.com'));

// 00\d   007   not 00A
// \d\d\d   010
// \w\w\d   py3
// py.  pyc  pyo  py!
// \d{3}\s+\d{3,8} \s 空格 
// 010 - 12345
// \d{3}\-\d{3,8} 010-12345

