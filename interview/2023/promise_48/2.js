// 简单 又复杂
// .then 或者 .catch 的参数期望是函数
// 传入非函数则会发生值透传
// Promise { 1 }
// console.log(Promise.resolve(1))
// 将resolve(1) 的值直接传到最后一个then里。
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)