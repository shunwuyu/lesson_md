// 使用的一些值都应该通过常量来管理，便于开发及后期维护
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
function MyPromise(fn) {
    // 在函数体内部首先创建了常量 that，因为代码可能会异步执行，用于获取正确的 this 对象
    const that = this
    // 一开始 Promise 的状态应该是 pending
    that.state = PENDING
    // value 变量用于保存 resolve 或者 reject 中传入的值
    that.value = null
    // resolvedCallbacks 和 rejectedCallbacks 用于保存 then 中的回调，因为当执行完
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []
    // 待完善 resolve 和 reject 函数
    // 待完善执行 fn 函数
    function resolve(value) {
        // 首先两个函数都得判断当前状态是否为等待中，因为规范规定只有等待态才可以改变状态
        // if (that.state === PENDING) {
        //     // 将当前状态更改为对应状态，并且将传入的值赋值给 value
        //     that.state = RESOLVED
        //     that.value = value
        //     // 遍历回调数组并执行
        //     that.resolvedCallbacks.map(cb => cb(that.value))
        // }
        if (value instanceof MyPromise) {
            return value.then(resolve, reject)
        }
        // 以往都用 setTimeout 模拟，但是只能触发宏任务
        // 目前浏览器支持 queueMicrotask，该函数可以触发微任务
        queueMicrotask(() => {
            if (that.state === PENDING) {
            that.state = RESOLVED
            that.value = value
            that.resolvedCallbacks.map(cb => cb(that.value))
            }
        })
    }
    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }
    // 实现很简单，执行传入的参数并且将之前两个函数当做参数传进去
    // 要注意的是，可能执行函数过程中会遇到错误，需要捕获错误并且执行 reject 函数
    try {
        fn(resolve, reject)
    } catch(e) {
        reject(e)
    }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this
    // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
    // 当参数不是函数类型时，需要创建一个函数赋值给对应的参数，同时也实现了透传，比如如下代码
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : r => {
          throw r
        }
    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    if (that.state === RESOLVED) {
        onFulfilled(that.value)
    }
    if (that.state === REJECTED) {
        onRejected(that.value)
    }

}

new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 0)
}).then(value => {
    console.log(value)
})