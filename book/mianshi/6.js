1 + '1' // 11 对于第一行代码来说，触发特点一
true + true // 2 对于第二行代码来说，触发特点二，所以将 true 转为数字 1
console.log(4 + [1,2,3])  //  触发特点二，所以将数组通过 toString 转为字符串 1,2,3，得到结果 41,2,3

console.log('a' + + 'b'); // + 'b' 等于 NaN
// console.log(+ 'b')
// 除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字
console.log(4 * '3'); // 12
console.log(4 * []); // 0
console.log(4 * [1, 2]) // NaN