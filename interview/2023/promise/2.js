// 先定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    constructor(executor){
        // executor 是一个执行器，进入会立即执行 同步代码
        // 并传入resolve和reject方法 异步后执行
        executor(this.resolve, this.reject) 
    }
    // 储存状态的变量，初始值是 pending
    status = PENDING;
    // 成功之后的值
    value = null;
    // 失败之后的原因
    reason = null;
    // onFulfilledCallback = null;
    onFulfilledCallbacks = [];
    // onRejectedCallback = null;
    onRejectedCallbacks = [];
    // resolve和reject为什么要用箭头函数？
    // 如果直接调用的话，普通函数this指向的是window或者undefined
    // 用箭头函数就可以让this指向当前实例对象
    // 更改成功后的状态
    resolve = (value) => {
        if (this.status === PENDING) {
            // 状态修改为成功
            this.status = FULFILLED;
            // 保存成功之后的值
            this.value = value;
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
            // ==== 新增 ====
            // 判断失败回调是否存在，如果存在就调用
            // this.onRejectedCallback && this.onRejectedCallback(reason)
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason)
            }
        }
    }
    then(onFulfilled, onRejected) {
        const promise2 = new MyPromise((resolve, reject) => {
            // 这里的内容在执行器中，会立即执行
            if (this.status === FULFILLED) {
              // 获取成功回调函数的执行结果
            //   const x = onFulfilled(this.value);
            //   // 传入 resolvePromise 集中处理
            //   resolvePromise(x, resolve, reject);
            queueMicrotask(() => {
                // 获取成功回调函数的执行结果
                const x = onFulfilled(this.value);
                // 传入 resolvePromise 集中处理
                resolvePromise(promise2, x, resolve, reject);
              })  
      
            } else if (this.status === REJECTED) {
              onRejected(this.reason);
            } else if (this.status === PENDING) {
              this.onFulfilledCallbacks.push(onFulfilled);
              this.onRejectedCallbacks.push(onRejected);
            }
          }) 
          
          return promise2;
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    // 如果相等了，说明return的是自己，抛出类型错误并返回
    if (promise2 === x) {
      return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if(x instanceof MyPromise) {
      x.then(resolve, reject)
    } else{
      resolve(x)
    }
  }
  

// MyPromise.js
module.exports = MyPromise;
