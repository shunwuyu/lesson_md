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
}).then(data => {
    console.log('data:', data);
    // 为了后面的then 
    return 101;
}, reason => {
    console.log('reason:', reason);
}).then(data => {
    console.log('第二个promise 成功', data);
}, reason => {
    console.log('第二个promise 失败', reason);
})