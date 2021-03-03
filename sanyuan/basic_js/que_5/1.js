var a = 0xa;//0x表示十六进制， 但是js会强制转换为十进制来运算
var b = 010; //0开头表示八进制，
console.log(a*b)

console.log(Number.parseInt('010',8));
console.log(Number.parseInt('20',2)) // NaN 不可能

console.log(0.1+0.2); // 0.30000000000000004
// 十进制数字转换为任意进制的字符串形式
console.log((0.1).toString(2))
console.log((0.2).toString(2))
