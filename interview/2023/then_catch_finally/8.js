Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
//  1 .then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传
// 第一个then和第二个then中传入的都不是函数，一个是数字类型，
// 一个是对象类型，因此发生了透传，
// 将resolve(1) 的值直接传到最后一个then里。