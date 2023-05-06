// 先看原生用法， 再打开调用
// const Promise = require('./promise');

let p = new Promise((resolve, reject) => {
    // resolve(100);
    // reject('失败');
    // 基本使用最后抛出异步  
    // setTimeout(() => {
    //     resolve(100);
    // }, 1000);
    // 抛出错误 先看原生， 再看自己的
    // throw '出现错误';  // 得走到失败中  onRejected
    resolve(100);
// 跳跃
}).then(data => {
    console.log('第一个promise 成功', data);
    // return  data; // 原生 return 了 就会继续执行下面的then resolve 
    // 套娃进行到底
    // 递归的解析返回值
    return new Promise((resolve, reject) => {
        resolve(new Promise((resolve, reject) => {
            resolve(data + 1)
        }))
    })
}, reason => {
    console.log('第一个promise 失败', reason);
}).then(data => {
    console.log('第二个promise 成功', data);
}, reason => {
    console.log('第二个promise 失败', reason);
})

// 跳跃
// let p = new Promise((resolve, reject) => {
//     // resolve(100);
//     // reject('失败');
//     // 基本使用最后抛出异步  
//     // setTimeout(() => {
//     //     resolve(100);
//     // }, 1000);
//     // 抛出错误 先看原生， 再看自己的
//     // throw '出现错误';  // 得走到失败中  onRejected
//     resolve(100);
// // 跳跃
// }).then().then(data => {
//     console.log('第二个promise 成功', data);
// }, reason => {
//     console.log('第二个promise 失败', reason);
// })