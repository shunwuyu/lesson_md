const MyPromise = require('./MyPromise');

const promise = new MyPromise((resolve, reject) => {
    resolve('success')
    reject('err')
})