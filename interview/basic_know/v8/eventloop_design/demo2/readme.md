# setTimeout和setImmediate到底谁先执行，本文让你彻底理解Event Loop
  [setTimeout和setImmediate到底谁先执行，本文让你彻底理解Event Loop](https://juejin.cn/post/6844904100195205133)

- Node.js 与前端JS 相同点是什么？
  也用到了V8引擎  
- 不同点是？
  环境不同
  服务目的
    界面
    I/O 处理， 并发， 数据库操作
- node 有哪些IO操作？
  1. 文件读取
  2. 网络
  3. 数据库
  I/O 操作与EventLoop 有密切关系
- Node.js 的Event Loop 最典型的特征是？
  是分阶段的
  中间件，  request-》 response  到了哪个阶段
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3027cbdfe546433a84fd8f80733e99dd~tplv-k3u1fbpfcp-watermark.awebp)
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0387c06eb2904b649f29bad1a12f9f4a~tplv-k3u1fbpfcp-watermark.awebp)
  对比图片

- 那几个阶段？
  1. timers: 执行setTimeout和setInterval的回调
    system的调度可能会延时，达不到预期时间。
  2. pending callbacks: 执行延迟到下一个循环迭代的 I/O 回调
    此阶段执行某些系统操作（例如TCP错误类型）的回调
    等待报告错误
  3. idle, prepare: 仅系统内部使用
  4. poll: 检索新的 I/O 事件;执行与 I/O 相关的回调。事实上除了其他几个阶段处理的事情，其他几乎所有的异步都在这个阶段处理。
    执行pending callback，在适当的情况下会阻塞在这个阶段
    执行I/O（连接、数据进入/输出）回调
    处理轮询队列中的事件。
    readFile 
  5. check: setImmediate在这里执行
    setImmediate()实际上是一个特殊的计时器
    它在事件循环的一个单独阶段运行。
  6. close callbacks: 一些关闭的回调函数

  1. 每个阶段都有一个自己的先进先出的队列
  2. 当这个队列的事件执行完或者达到该阶段的上限时， 才会进入下一个阶段
  3. 是否在等待任何一个I/O或者定时器， 他就自己退出
  4. poll阶段 并不一定每次都是check阶段
    poll队列执行完后，如果没有setImmediate但是有定时器到期，他会绕回去执行定时器阶段：
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce949c9fc0614285a42d718ab32690ef~tplv-k3u1fbpfcp-watermark.awebp)

- 7.js
  在一个异步流程里, setImmediate会比定时器先执行
  流程是？
  1. 外层是一个setTimeout，所以执行他的回调的时候已经在timers阶段了
  2. 处理里面的setTimeout，因为本次循环的timers正在执行，所以他的回调其实加到了下个timers阶段
  3. 处理里面的setImmediate，将它的回调加入check阶段的队列
  4. 外层timers阶段执行完，进入pending callbacks，idle, prepare，poll，这几个队列都是空的，所以继续往下
  5. 到了check阶段，发现了setImmediate的回调，拿出来执行
  6. 然后是close callbacks，队列是空的，跳过
  7. 又是timers阶段，执行我们的console

- 8.js
  setTimeout先出来
  1. 外层同步代码一次性全部执行完，遇到异步API就塞到对应的阶段
  2. 遇到setTimeout，虽然设置的是0毫秒触发，但是被node.js强制改为1毫秒，塞入times阶段
  3. 遇到setImmediate塞入check阶段
  4. 同步代码执行完毕，进入Event Loop
  5. 先进入times阶段，检查当前时间过去了1毫秒没有，如果过了1毫秒，满足setTimeout条件，执行回调，如果没过1毫秒，跳过
  6. 跳过空的阶段，进入check阶段，执行setImmediate回调

  我们发现关键就在这个1毫秒，如果同步代码执行时间较长，进入Event Loop的时候1毫秒已经过了，setTimeout执行，如果1毫秒还没到，就先执行了setImmediate。每次我们运行脚本时，机器状态可能不一样，导致运行时有1毫秒的差距，一会儿setTimeout先执行，一会儿setImmediate先执行。

- 
  ```js
    var fs = require('fs')

    fs.readFile(__filename, () => {
        setTimeout(() => {
            console.log('setTimeout');
        }, 0);
        setImmediate(() => {
            console.log('setImmediate');
        });
    });
  ```
  setTimeout和setImmediate在readFile的回调里面，由于readFile回调是I/O操作，他本身就在poll阶段，所以他里面的定时器只能进入下个timers阶段，但是setImmediate却可以在接下来的check阶段运行，所以setImmediate肯定先运行，他运行完后，去检查timers，才会运行setTimeout。

- 哪个东西会让event Loop 停下来？

  他不属于任何的Event Loop阶段
  node 里有process.nextTick();
  Event Loop根本就不会继续进行 会马上停下来执行process.nextTick() 
  
  requestAnimationFrame处于渲染阶段，不在微任务队列，也不在宏任务队列

- 9.js
  1. 我们代码基本都在readFile回调里面，他自己执行时，已经在poll阶段
  2. 遇到setTimeout(fn, 0)，其实是setTimeout(fn, 1)，塞入后面的timers阶段
  3. 遇到setImmediate，塞入后面的check阶段
  4. 遇到nextTick，立马执行，输出'nextTick 1'
  5. 到了check阶段，输出'setImmediate',又遇到个nextTick,立马输出'nextTick 2'
  6. 到了下个timers阶段，输出'setTimeout'

- nextTick的队列比Promise 10.js


- setImmediate 是什么？
  一些需要长时间运行(占用大量cpu时间)的操作放在一个回调函数里,在浏览器完成后面的其他语句后,就立刻执行这个回调函数,
  1.js
- 我们可以使用什么代码来实现它？  有兼容性
  setTimeout(0)
  2.js
- 相同点和不同点？
  1. 都是宏任务(Node.js环境)  后端I/O 操作更多
  2. 先后顺序

- 同步主线程给我们的感觉是快速完成的，但是setTimeout 有时不准确
  如何写出同步， 但耗时的代码
  3.js  循环   同步

- 如何改成异步的？  4.js
  先完成后面的其他语句后

  使用异步的好处是你只需要设置好异步的触发条件就可以去干别的事情了，所以异步不会阻塞主干上事件的执行。特别是对于JS这种只有一个线程的语言，如果都像我们第一个例子那样去while(true)，那浏览器就只有一直卡死了，只有等这个循环运行完才会有响应。

- JS异步是怎么实现的
  1. JS单线程指？
  JS的主运行线程只有一个，而不是整个运行环境都是单线程。以chrome 为例。
  
  2. 其他异步线程在那？
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/128265bfc2be4ede80c06927c6e78d0b~tplv-k3u1fbpfcp-watermark.awebp)
    - GPU 进程是什么？
      是用于显卡硬件加速，提高你网页浏览的体验，特别是高清视频Flash播放
      加速处理计算请求，一般是涉及图形、视频的渲染
    - chrome 启动这么多进程有什么好处？ 多开一个tab 意味着什么？
      更快，   
      tab 见是独立进程， 一个崩溃， 其他不受影响
      超越ie 的原因
    - DOM树和CSS 渲染树哪个线程负责？
      GUI线程 他解析HTML和CSS，然后将他们构建成DOM树和渲染树就是这个线程负责的
    - JS 引擎线程
      负责执行JS的主线程 JS是单线程的"就是指的这个线程
      Chrome V8引擎就是在这个线程运行的
      JS -> dom  不高效，  跨线程
    - 线程互斥
      这个线程跟GUI线程是互斥的。互斥的原因是JS也可以操作DOM，如果JS线程和GUI线程同时操作DOM，结果就混乱了，不知道到底渲染哪个结果。这带来的后果就是如果JS长时间运行，GUI线程就不能执行，整个页面就感觉卡死了。所以我们最开始例子的while(true)这样长时间的同步代码在真正开发时是绝对不允许的。
    - 定时器线程
      setTimeout 在 跟JS主线程根本不在同一个地方
      所以“单线程的JS”能够实现异步。JS的定时器方法还有setInterval，
      也是在这个线程
      定时器线程其实只是一个计时的作用，他并不会真正执行时间到了的回调，真正执行这个回调的还是JS主线程

    - 事件触发线程
      当时间到了定时器线程会将这个回调事件给到事件触发线程，
      然后事件触发线程将它加到事件队列里面去
      最终JS主线程从事件队列取出这个回调执行。
      事件触发线程不仅会将定时器事件放入任务队列，其他满足条件的事件也是他负责放进任务队列。

    - 异步HTTP请求线程
      处理异步的ajax请求 会通知事件触发线程
      事件触发线程将这个事件放入事件队列给主线程执行。
      所以JS异步的实现靠的就是浏览器的多线程，
      当他遇到异步API时，就将这个任务交给对应的线程，
      当这个异步API满足回调条件时，
      对应的线程又通过事件触发线程将这个事件放入任务队列，
      然后主线程从任务队列取出事件继续执行。

- Event Loop
  事件循环 是JS管理事件执行的一个流程
  具体的管理办法由他具体的运行环境确定

  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da2a8fb96e8c49d08589c1c31470d366~tplv-k3u1fbpfcp-watermark.awebp)
  图里可以看到哪些？
    1. 事件循环就是一个循环，是各个异步线程用来通讯和协同执行的机制。
    2. 各个线程为了交换消息，还有一个公用的数据区，这就是事件队列。
    3. 各个异步线程执行完后，通过事件触发线程将回调事件放到事件队列，
        主线程每次干完手上的活儿就来看看这个队列有没有新活儿，有的话就取出来执行。

  1. 主线程每次执行时，先看看要执行的是同步任务，还是异步的API
  2. 同步任务就继续执行，一直执行完
  3. 遇到异步API就将它交给对应的异步线程，自己继续执行同步任务
  4. 异步线程执行异步API，执行完后，将异步回调事件放入事件队列上
  5. 主线程手上的同步任务干完后就来事件队列看看有没有任务
  6. 主线程不断循环上述流程

- 有哪些坑？
  1. 定时器不准
    先执行同步任务，然后再执行事件队列里面的回调
    1. 主线程执行同步代码
    2. 遇到setTimeout，将它交给定时器线程
    3. 定时器线程开始计时，2秒到了通知事件触发线程
    4. 事件触发线程将定时器回调放入事件队列，异步流程到此结束
    5. 主线程如果有空，将定时器回调拿出来执行，如果没空这个回调就一直放在队列里。
    写个例子？ 5.js
    所以再次强调，写代码时一定不要长时间占用主线程。交给异步线程

  2. 事件优先级
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0387c06eb2904b649f29bad1a12f9f4a~tplv-k3u1fbpfcp-watermark.awebp)
    1. 一个Event Loop可以有一个或多个事件队列，但是只有一个微任务队列。
    2. 微任务队列全部执行完会重新渲染一次
    3. 每个宏任务执行完都会重新渲染一次
    4. requestAnimationFrame处于渲染阶段，不在微任务队列，也不在宏任务队列

    - 宏任务
      script
      setTimeout/setInterval
      setImmediate(Node.js)
      I/O
      UI事件
      postMessage
    
    - Promise
    - process.nextTick（Node.js）
    - Object.observe
    - MutaionObserver

    - 解题  6.js

# Node.js的Event Loop
  1. 运行在服务端的js，
  2. 也用到了V8引擎
  他的Event Loop还要处理一些I/O，比如新的网络连接等
  Node的Event Loop是分阶段的
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3027cbdfe546433a84fd8f80733e99dd~tplv-k3u1fbpfcp-watermark.awebp)

  1. timers: 执行setTimeout和setInterval的回调
  2. pending callbacks: 执行延迟到下一个循环迭代的 I/O 回调
  3. idle, prepare: 仅系统内部使用
  4. poll: 检索新的 I/O 事件;执行与 I/O 相关的回调。事实上除了其他几个阶段处理的事情，其他几乎所有的异步都在这个阶段处理。
  5. check: setImmediate在这里执行
  6. close callbacks: 一些关闭的回调函数，如：socket.on('close', ...)


  每个阶段都有一个自己的先进先出的队列
  只有当这个队列的事件执行完或者达到该阶段的上限时，才会进入下一个阶段
  在每次事件循环之间，Node.js都会检查它是否在等待任何一个I/O或者定时器，
  如果没有的话，程序就关闭退出了

  如果一个Node程序只有同步代码，你在控制台运行完后，他就自己退出了。

  还有个需要注意的是poll阶段，他后面并不一定每次都是check阶段，
  poll队列执行完后，如果没有setImmediate但是有定时器到期，他会绕回去执行定时器阶段：
  
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce949c9fc0614285a42d718ab32690ef~tplv-k3u1fbpfcp-watermark.awebp)

- 在一个异步流程里，setImmediate会比定时器先执行
  7.js
  1. 外层是一个setTimeout，所以执行他的回调的时候已经在timers阶段了
  2. 处理里面的setTimeout，因为本次循环的timers正在执行，所以他的回调其实加到了下个timers阶段
  3. 处理里面的setImmediate，将它的回调加入check阶段的队列
  4. 外层timers阶段执行完，进入pending callbacks，idle, prepare，poll，这几个队列都是空的，所以继续往下
  5. 到了check阶段，发现了setImmediate的回调，拿出来执行
  6. 然后是close callbacks，队列是空的，跳过
  7. 又是timers阶段，执行我们的console

- 在一个异步流程里 setImmediate会比定时器先执行
  8.js
  node.js里面setTimeout(fn, 0)会被强制改为setTimeout(fn, 1)
  HTML 5里面setTimeout最小的时间限制是4ms
  1. 外层同步代码一次性全部执行完，遇到异步API就塞到对应的阶段
  2. 遇到setTimeout，虽然设置的是0毫秒触发，但是被node.js强制改为1毫秒，塞入times阶段
  3. 遇到setImmediate塞入check阶段
  4. 同步代码执行完毕，进入Event Loop
  5. 先进入times阶段，检查当前时间过去了1毫秒没有，如果过了1毫秒，满足setTimeout条件，执行回调，如果没过1毫秒，跳过
  6. 跳过空的阶段，进入check阶段，执行setImmediate回调
  
  如果1毫秒还没到，就先执行了setImmediate
  导致运行时有1毫秒的差距，一会儿setTimeout先执行，一会儿setImmediate先执行

# process.nextTick()
  process.nextTick()是一个特殊的异步API 他不属于任何的Event Loop阶段
  事实上Node在遇到这个API时，Event Loop根本就不会继续进行，会马上停下来执行process.nextTick()
  9.js

  1. 我们代码基本都在readFile回调里面，他自己执行时，已经在poll阶段
  2. 遇到setTimeout(fn, 0)，其实是setTimeout(fn, 1)，塞入后面的timers阶段
  3. 遇到setImmediate，塞入后面的check阶段
  4. 遇到nextTick，立马执行，输出'nextTick 1'
  5. 到了check阶段，输出'setImmediate',又遇到个nextTick,立马输出'nextTick 2'
  6. 到了下个timers阶段，输出'setTimeout'

  类似于我们前面讲的微任务
  10.js

