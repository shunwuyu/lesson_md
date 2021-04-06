class Promise {
  constructor(executor) {
    // 初始化state为等待态
    this.state = 'pending'
    // 成功的值
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;
    // 成功
    let resolve = value => {
      if (this.state === 'pending') {
        // resolve调用后，state转化为成功态
        this.state = 'fulfilled';
        // 储存成功的值
        this.value = value;
      }
    };
    // 失败
    let reject = (reason) => {
      // state改变,reject调用就会失败
      if (this.state === 'pending') {
        // reject调用后，state转化为失败态
        this.state = 'rejected';
        // 储存失败的原因
        this.reason = reason;
      }
    };

    try{
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
    // console.log(resolve);
    // console.log(reject);
  }
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(0);
  },0)
})