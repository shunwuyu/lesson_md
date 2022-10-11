https://juejin.cn/post/6844904151369908232#heading-14

1. promise基础功能是？
    1.js 
    - Promise 是一个类，在执行这个类的时候会传入一个执行器，这个执行器会立即执行
    - Promise 会有三种状态
        Pending 等待
        Fulfilled 完成
        Rejected 失败
    - 状态只能由 Pending --> Fulfilled 或者 Pending --> Rejected，且一但发生改变便不可二次修改；
    - Promise 中使用 resolve 和 reject 两个函数来更改状态；
    - then 方法内部做但事情就是状态判断
        如果状态是成功，调用成功回调函数
        如果状态是失败，调用失败回调函数

    


1. 如何介绍Promise
    Promise 是一个对象，它代表了一个异步操作的最终完成或者失败。
    由于它的then方法和catch、finally方法会返回一个新的Promise所以可以允许我们链式调用，解决了传统的回调地狱问题。
2. 有什么特点
    - Promise的状态一经改变就不能再改变
    - .then和.catch都会返回一个新的Promise
    - catch不管被连接到哪里，都能捕获上层未捕捉过的错误。
    - 在Promise中，返回任意一个非 promise 的值都会被包裹成 promise 对象，例如return 2会被包装为return Promise.resolve(2)。
    - Promise 的 .then 或者 .catch 可以被调用多次, 但如果Promise内部的状态一经改变，并且有了一个值，那么后续每次调用.then或者.catch的时候都会直接拿到该值。(见3.5)
    - .then 或者 .catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 .catch 捕获。(见3.6) reject 
    - .then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环
    - .then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。
    - .then方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为catch是.then第二个参数的简便写法。
    - .finally方法也是返回一个Promise，他在Promise结束的时候，无论结果为resolved还是rejected，都会执行里面的回调函数。

- 主线程代码立即执行，setTimeout 是异步代码，then 会马上执行，这个时候判断 Promise 状态，状态是 Pending，然而之前并没有判断等待这个状态
