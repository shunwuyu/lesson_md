// Creates a function that accepts up to one argument, 
// ignoring any additional arguments.
// let unary = fn => val => fn(val)
// let parse = unary(parseInt)
// console.log(parse.toString());
// console.log(['1.1', '2', '0.3'].map(parse))

console.log(['10','10','10','10','10'].map(parseInt));
// let myname = 'gg';
// {
//   console.log(myname)
//   let myname = '极客时间'
// }


// 脑海跳出的答案是 [1, 2, 3]，但是真正的答案是[1, NaN, NaN]
console.log(['1', '2', '3'].map(parseInt));
// parseInt('1', 0)  10 
// parseInt('2', 1) 基数为1（1进制）表示的数中，最大值小于2
// parseInt('3', 2) 基数为2（2进制）表示的数中，最大值小于3

// 这个callback一共可以接收三个参数，其中第一个参数代表当前被处理的元素，而第二个参数代表该元素的索引。
//parseInt(string, radix)   而parseInt则是用来解析字符串的，使字符串成为指定基数的整数。
