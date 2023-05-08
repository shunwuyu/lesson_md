// string 
// 原因是 typeof 操作符返回一个表示未经计算的操作数的数据类型的字符串
// typeof null 的结果为 "object"，然后再将它传递给另一个 typeof
//  操作符，由于这个字符串也是字符串类型的，所以会返回 "string"。
console.log(typeof typeof typeof null);