[source](https://juejin.cn/post/7049385716765163534)

- 如何监听DOM 结构变化？
  当 DOM 对象树发生任何变动时，MutationObserver 会得到通知。
  demo1
  属于微任务
  demo1/index.html

- 如何感知滑动到了第二个页面？
  1.html

- 图片懒加载  注意哪些问题？
  1. 监听图片进入视区
  2. 解除观察

- getComputedStyle()

- 懒加载 + 判断元素是否在视区
   

- ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92a182ea82244f4aa01d87db77abc553~tplv-k3u1fbpfcp-watermark.awebp?)
  以下图 表示什么？
  Event Loop    Event 为何？   ajax 完成后通知主线程继续执行， 这就有个事件

- 宏任务  微任务 有什么别称？
  普通任务 高优任务

- 怎么理解宏微任务的划分呢
  定时器、网络请求这种都是在别的线程跑完之后通知主线程的普通异步逻辑，所以都是宏任务

  而高优任务的这三种也很好理解，MutationObserver 和 Object.observe 都是监听某个对象的变化的，变化是很瞬时的事情，肯定要马上响应，不然可能又变了，Promise 是组织异步流程的，异步结束调用 then 也是很高优的。

  设计 Loop 机制和 Task 队列是为了支持异步，解决逻辑执行阻塞主线程的问题，设计 MicroTask 队列的插队机制是为了解决高优任务尽早执行的问题。

- node.js 宏微任务和浏览器的区别是？
  1. Node.js 对宏任务做了优先级划分 Timers、Pending、Poll、Check、Close 这 5 种
  2. Node.js 对微任务做了划分 也就是 nextTick 的微任务和其他微任务
  3. 

- 为何要Event Loop?
  - JavaScript 是用于实现网页交互逻辑的, 涉及到 dom 操作,
   如果多个线程同时操作需要做同步互斥的处理，
   为了简化就设计成了单线程，
   遇到定时逻辑、网络请求又会阻塞住 怎么办？
   加一层调度逻辑，  JS 代码封装成一个个的任务，放在一个任务队列中， 
   主线程就不断的取任务执行就好了。

- 定时器、网络请求其实都是在别的线程执行的, 执行完了之后在任务队列里放个任务，
  告诉主线程可以继续往下执行了。
  ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cfac5f08713b46dd8f6933e4f53ed1da~tplv-k3u1fbpfcp-watermark.awebp?)
  这些异步任务是在别的线程执行完，
  然后通过任务队列通知下主线程，
  是一种事件机制，
  所以这个循环叫做 Event Loop。

  这些在其他线程执行的异步任务包括定时器（setTimeout、setInterval），
  UI 渲染、网络请求（XHR 或 fetch）

  有了插队机制之后，高优任务就能得到及时的执行。

  普通任务 宏任务 
  高优任务 微任务

  宏任务包括 setTimeout、setInterval、requestAnimationFrame、Ajax、fetch、script标签的代码
  微任务包括 Promise.then、MutationObserver、Object.observe

- Node.js 的 Event loop
  Node.js 是一个新的 JS 运行环境，它同样要支持异步逻辑，包括定时器、IO、网络请求，很明显，也可以用 Event Loop 那一套来跑。
  用什么点来 node  event loop 要重新设计呢？
  做高性能服务器来说，那种设计还是有点粗糙了。

  浏览器的 Event Loop 只分了两层优先级，一层是宏任务，一层是微任务。
  但是宏任务之间没有再划分优先级，微任务之间也没有再划分优先级。

  Node.js 任务宏任务之间也是有优先级的，比如定时器 Timer 的逻辑就比 IO 的逻辑优先级高，因为涉及到时间，越早越准确；而 close 资源的处理逻辑优先级就很低，因为不 close 最多多占点内存等资源，影响不大。

  宏任务队列拆成了五个优先级：Timers、Pending、Poll、Check、Close。
  ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f16ec03bf614d5b9d01fe55b126758b~tplv-k3u1fbpfcp-watermark.awebp?)

  - Node.js 的 Event Loop 并不是浏览器那种一次执行一个宏任务，然后执行所有的微任务，而是执行完一定数量的 Timers 宏任务，再去执行所有微任务，然后再执行一定数量的 Pending 的宏任务，然后再去执行所有微任务，剩余的 Poll、Check、Close 的宏任务也是这样。

   Node.js 的 Event Loop 每次都是把当前优先级的所有宏任务跑完再去跑微任务，然后再跑下一个优先级的宏任务。

  除了宏任务有优先级，微任务也划分了优先级，多了一个 process.nextTick 的高优先级微任务，在所有的普通微任务之前来跑。

  Node.js 的 Event Loop 的完整流程就是这样的
  - Timers 阶段：执行一定数量的定时器，也就是 setTimeout、setInterval 的 callback，太多的话留到下次执行
  - 微任务：执行所有 nextTick 的微任务，再执行其他的普通微任务
  - Pending 阶段：执行一定数量的 IO 和网络的异常回调，太多的话留到下次执行
  - 微任务：执行所有 nextTick 的微任务，再执行其他的普通微任务
  - Idle/Prepare 阶段：内部用的一个阶段
  - 微任务：执行所有 nextTick 的微任务，再执行其他的普通微任务
  - Poll 阶段：执行一定数量的文件的 data 回调、网络的 connection 回调，太多的话留到下次执行。如果没有 IO 回调并且也没有 timers、check 阶段的回调要处理，就阻塞在这里等待 IO 事件
  - 微任务：执行所有 nextTick 的微任务，再执行其他的普通微任务
  - Check 阶段：执行一定数量的 setImmediate 的 callback，太多的话留到下次执行。
  - 微任务：执行所有 nextTick 的微任务，再执行其他的普通微任务
  - Close 阶段：执行一定数量的 close 事件的 callback，太多的话留到下次执行。
  - 微任务：执行所有 nextTick 的微任务，再执行其他的普通微任务
