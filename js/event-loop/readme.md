[source](https://juejin.im/post/5c947bca5188257de704121d)

1. 所有任务在主线程上， 执行栈
2. 主线程上有 任务队列  异步任务有了运行结果 ， 就在任务队列中放置一个事件
3. 所有同步任务执行完毕 ， 任务队列， 结束等待状态 ， 进入执行栈
4. 重复三步

一个事件循环中有一个或者多个任务队列 
两种异步
1. 宏任务  script setTimeout setInterval   setImmediate I/O, UI rendering
2. 微任务   procex.nextTick   Promise Object.observe Mutation Observer

2. 事件循环event-loop 是什么

0 ms 后将回调函数放到 宏任务队列中

JavaScript 是单线程的， 所有的任务都需要排队， 前一个任务结束 ， 后一个任务才会结束。
协调事件， 用户交互（user interaction） 脚本 渲染，  网络  用户代理   必需使用event loops

1. 先微任务 再宏任务 


