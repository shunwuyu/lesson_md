// const MyPromise = require('./MyPromise4')
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    constructor(executor){
        // executor 是一个执行器，进入会立即执行
        // 并传入resolve和reject方法
        executor(this.resolve, this.reject) 
    }
    // 储存状态的变量，初始值是 pending
    status = PENDING;
    // 成功之后的值
    value = null;
    // 失败之后的原因
    reason = null;
    // 存储成功回调函数
    onFulfilledCallbacks = [];
    // 存储失败回调函数
    onRejectedCallbacks = [];
    // resolve和reject为什么要用箭头函数？
    // 如果直接调用的话，普通函数this指向的是window或者undefined
    // 用箭头函数就可以让this指向当前实例对象
    // 更改成功后的状态
    resolve = (value) => {
        // 只有状态是等待，才执行状态修改
        if (this.status === PENDING) {
            // 状态修改为成功
            this.status = FULFILLED;
            // 保存成功之后的值
            this.value = value;
            // console.log(this.onFulfilledCallback, '////')
            // 判断成功回调是否存在，如果存在就调用
            // this.onFulfilledCallback && this.onFulfilledCallback(value);
            while (this.onFulfilledCallbacks.length) {
                // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    }
    // 更改失败后的状态
    reject = (reason) => {
        // 只有状态是等待，才执行状态修改
        if (this.status === PENDING) {
            // 状态成功为失败
            this.status = REJECTED;
            // 保存失败后的原因
            this.reason = reason;
            // 判断失败回调是否存在，如果存在就调用
            // this.onRejectedCallback && this.onRejectedCallback(reason)
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason)
              }
        }
    }
    then(onFulfilled, onRejected) {
        // 为了链式调用这里直接创建一个 MyPromise，并在后面 return 出去
        // console.log(onFulfilled, '----------------')
        const promise2 = new MyPromise((resolve, reject) => {
            // 这里的内容在执行器中，会立即执行
            // console.log(this.status, onFulfilled, '??')
            if (this.status === FULFILLED) {
                // 获取成功回调函数的执行结果
                // console.log(this.value, '...')
                const x = onFulfilled(this.value);
                // console.log(x)
                // // 传入 resolvePromise 集中处理
                // console.log(resolve);
                resolvePromise(x, resolve, reject);
            } else if (this.status === REJECTED) {
                onRejected(this.reason);
            } else if (this.status === PENDING) {
                // console.log('///////////////')
                console.log(onFulfilled, '////////')
                this.onFulfilledCallbacks.push(onFulfilled);
                this.onRejectedCallbacks.push(onRejected);
            }
        })
        return promise2;
    }
}

function resolvePromise(x, resolve, reject) {
    // 判断x是不是 MyPromise 实例对象
    if(x instanceof MyPromise) {
        console.log(x.then);
      // 执行 x，调用 then 方法，目的是将其状态变为 fulfilled 或者 rejected
      x.then(value => {
        console.log(resolve, value, '????')
        return resolve(value)}, reason => reject(reason))
      // 简化之后
    //   x.then(resolve, reject)
    } else{
      // 普通值
      resolve(x)
    }
}

const promise = new MyPromise((resolve, reject) => {
    // 目前这里只处理同步的问题
resolve('success')
})

function other () {
    return new MyPromise((resolve, reject) =>{
        resolve('other')
    })
}

promise.then(value => {
    console.log(1)
    console.log('resolve', value)
    return other()
}).then(value => {
    console.log('................')
    console.log(2)
    console.log('resolve', value)
})
  