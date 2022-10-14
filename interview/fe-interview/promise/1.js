// new Promise((resolve, reject) => {
  // 这个函数叫executor  传入就执行
// })
class Promise {
  constructor(executor) {
    // 成功
    let resolve = () => { };
    // 失败
    let reject = () => { };
    executor(resolve, reject);
    console.log(resolve);
    console.log(reject);
  }
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(0);
  },0)
})