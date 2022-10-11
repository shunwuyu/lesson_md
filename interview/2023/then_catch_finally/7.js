const promise = Promise.resolve().then(() => {
    return promise;
})
promise.catch(console.err)
// .then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环
// Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>