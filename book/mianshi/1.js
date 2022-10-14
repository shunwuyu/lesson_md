console.log('1'.toString())
// console.log(undefined.toString()) // 为什么不可以？
// 必要情况, 不是什么情况都转
// '1' 已经不是原始类型了，而是被强制转换成了 String 类型也就是对象类型
let a = new String(1);
console.log(typeof a) // String 类型
// JS 的最初版本中使用的是 32 位系统 
// 为了性能考虑使用低位存储变量的类型信息
// 000 开头代表是对象，然而 null 表示为全零
// 所以将它错误的判断为 object
console.log(typeof null); 