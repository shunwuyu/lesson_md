// // 控制台中会立即打印出 “立即打印”
// const p1 = new Promise(r => console.log('立即打印'));

// function runP1 () {
//     const p1 = new Promise(r => console.log('立即打印'))
//     return p1
// }
// runP1()

function runAsync (x) {
    const p = new Promise(resolve => setTimeout(() => resolve(x, console.log(x)), 1000))
    return p
}

// runAsync(1)
// Promise.all([runAsync(1), runAsync(2), runAsync(3)])
//   .then(res => console.log(res))

// 并发运行时 1,  2,  3
// 一次性输出 [1, 2, 3]

// 在间隔一秒后，控制台会同时打印出1, 2, 3，还有一个数组[1, 2, 3]
// all 的好处， 请大声说出来
// 有了all，你就可以并行执行多个异步操作，并且在一个回调中处理所
// 而且这个结果中数组的顺序和Promise.all()接收到的数组顺序一致


function runReject (x) {
    const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
    return p
}
// .catch是会捕获最先的那个异常
// 最先的异常就是runReject(2)的结果
// 如果一组异步操作中有一个异常都不会进入.then()的第一个回调函数参数中
// .then()方法的第二个参数也是可以捕获错误的
// Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res), 
  err => console.log(err))



  