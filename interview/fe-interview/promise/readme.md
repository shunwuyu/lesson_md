[source](https://juejin.cn/post/6844903625769091079)
1. Promise 有几种状态?
  未完成态(pending)、完成态(fulfilled) 和失败态(rejected)
2. 什么叫promiseA+规范? 
![](https://juejin.cn/post/6844903630575763469)

一、
- 三种状态的一种 未完成态(pending)、完成态(resolved) 和失败态(rejected)
- Promise 的状态只会出现从未完成态向完成态或失败态转化;
- Promise 的状态一旦转化，将不能被更改;

二、
- Promise存在三个状态（state）pending、fulfilled、rejected
- pending（等待态）为初始态，并可以转化为fulfilled（成功态）和rejected（失败态）
- 成功时，不可转为其他状态，且必须有一个不可改变的值（value）
- 失败时，不可转为其他状态，且必须有一个不可改变的原因（reason）
- new Promise((resolve, reject)=>{resolve(value)}) resolve为成功，接收参数value，状态改变为fulfilled，不可再次改变。
- new Promise((resolve, reject)=>{reject(reason)}) reject为失败，接收参数reason，状态改变为rejected，不可再次改变。
- 若是executor函数报错 直接执行reject();

三、then方法
  Promise有一个叫做then的方法，里面有两个参数：onFulfilled,onRejected,成功有成功的值，失败有失败的原因
  当状态state为fulfilled，则执行onFulfilled，传入this.value。
  当状态state为rejected，则执行onRejected，传入this.reason

  onFulfilled,onRejected如果他们是函数，则必须分别在fulfilled，rejected后被调用，value或reason依次作为他们的第一个参数
 
四、解决异步实现   类似发布订阅
  现在基本可以实现简单的同步代码，但是当resolve在setTomeout内执行，then时state还是pending等待状态 我们就需要在then调用的时候，将成功和失败存到各自的数组，一旦reject或者resolve，就调用它们

五、解决链式调用
  