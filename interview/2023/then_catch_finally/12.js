// Promise.resolve('1')
Promise.reject('1')
  .then(res => {
    console.log(res)
  })
  .finally(() => {
    console.log('finally')
  })

//   .finally()方法不管Promise对象最后的状态如何都会执行
// .finally()方法的回调函数不接受任何的参数
// 没法知道Promise最终的状态是resolved还是rejected的
// 它最终返回的默认会是一个上一次的Promise对象值，
