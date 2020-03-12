// promise 三个状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 2000);
// })
// .then(res => console.log(res));
function resolvePromise(promise2, x, resolve, reject) {
  console.log('xxxx', x);
  resolve(x);
}
class SimplePromise {
  constructor(excutor) {
    this.status = PENDING;
    this.valus = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      setTimeout(() => {
        this.status = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach(cb => cb(value))
      });
    }
    const  reject = (reason) => {
      setTimeout(() => {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(cb => cb()); 
      });
    }
    excutor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      var tempPromise = new SimplePromise((resolve, reject) => {
        setTimeout(() => {
          let x = onFulfilled(this.value);
          resolvePromise(tempPromise, x, resolve, reject); 
        });
      });
      return tempPromise;
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
      return this;
    }
    if (this.status === PENDING) {
      var tempPromise = new SimplePromise((resolve, reject) => {
        this.onFulfilledCallbacks.push((value) => {
          let x = onFulfilled(value);
          resolvePromise(tempPromise, x, resolve, reject);
        });
        this.onRejectedCallbacks.push(onRejected);
      });
      return tempPromise;
      
    }
  }
}