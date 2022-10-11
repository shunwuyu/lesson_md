const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('timer')
        resolve('success')
    }, 1000)
})
const start = Date.now();
promise.then(res => {
    console.log(res, Date.now() - start)
})
promise.then(res => {
    console.log(res, Date.now() - start)
})

// 'timer'
// 'success' 1001
// 'success' 1002
// 如果你足够快的话，也可能两个都是1001
// Promise 的 .then 或者 .catch 可以被调用多次
// 但这里 Promise 构造函数只执行一次
// promise 内部状态一经改变，并且有了一个值，
// 那么后续每次调用 .then 或者 .catch 都会直接拿到该值。
// 同步代码也要花些事件 1微秒