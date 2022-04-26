// let a = 1234567890123456789012345678901234567890;
// console.log(a, a + 1); // 不精确 怎么办？
// JS原始数据类型有哪些?
// boolean null undefined number string symbol bigint
// BigInt是一种特殊的数字类型，它支持任意长度的整数。
// 可以在一个整数的末尾添加字符n，或者调用函数 BigInt()
// 使用字符串、数字等来创建一个BigInt。
// const bigint =1234567890123456789012345678901234567890n;
// const sameBigint = BigInt("1234567890123456789012345678901234567890");
// // console.log(typeof bigint);
// const bigintFromNumber =BigInt(10);

// console.log(bigint + sameBigint); // BigInt可以像常规数字一样使用
// console.log(1n+2n, 5n/2n); // 会舍弃小数部分 对 bigint 的所有操作都返回 bigint
// console.log(1n + 2); // 不能混用 bigint 和常规数字
// 如果需要，我们应该显式转换它们?
let bigint =1n;
let number =2;
console.log(Number(bigint)+ number);
console.log(bigint +BigInt(number));
// "1" -> 怎么转变成整形？ + 
console.log(+"1") // 
console.log(+bigint);//bigints不支持它
// 允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数id