[source](https://elemefe.github.io/node-interview/#/sections/zh-cn/process)

- node.js 是单线程吗？[source](https://blog.csdn.net/qq_34788903/article/details/99821950)
javascript 是单线程的  程序员没有机会新建线程，利用好多核CPU的原因
Ajax 和 Web Worker 
javascript是单线程， 无法利用多核CPU。 
ajax 请求发送之后， 除非是同步请求， 否则其余的JS代码会很快执行。
ajax 发送完成后， 这个网络请求不会阻塞JS的执行， 而网络请求已经发生。
浏览器并非以单线程的方式在执行。 
Web Worker 的产生， JavaScript 与UI占用同一线程造成的， 一条线程去执行JS
I/O 方面用到一小部分额外的线程协助实现异步
Ajax请求确实是异步的，这请求是由浏览器新开一个线程请求，事件回调的时候是放入Event loop单线程事件队列等候处理。
Ajax请求确实是异步的，这请求是由浏览器新开一个线程请求，事件回调的时候是放入Event loop单线程事件队列等候处理。

    消息队列中放着我们注册异步任务时添加的回调函数，主线程在发起AJAX请求后，会继续执行其他代码。AJAX线程负责请求url，拿到响应后，它会把响应封装成一个JavaScript对象，然后构造一条消息：

- Process是某数据集合的一次运行活动， 是系统进行资源分配和调度的基本单位， 是操作系统结构的基础， 进程是线程的容器。进程是资源分配的最小单位。
多进程就是进程的复制 自己的独立空间地址、数据栈， 一个进程无法访问另一个进程里定义的变量、数据结构， IPC通信(Inter-Process Communication)，进程这间才可数据共享。

const aliyuangong = '罗安培';

Vue.use 

- pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能

线程是操作系统能够进行运算调度的最小单位  隶属于进程的，被包含于进程之中。一个线程只能隶属于一个进程，但是一个进程是可以拥有多个线程的。

单线程就是一个进程只开一个线程
Node.js 虽然是单线程模型，但是其基于事件驱动、异步非阻塞模式，可以应用于高并发场景，避免了线程创建、线程之间上下文切换所产生的资源开销。
当你的项目中需要有大量计算，CPU 耗时的操作时候，要注意考虑开启多进程来完成了。
Node.js 开发过程中，错误会引起整个应用退出，应用的健壮性值得考验，尤其是错误的异常抛出，以及进程守护是必须要做的。
单线程无法利用多核CPU，但是后来Node.js 提供的API以及一些第三方工具相应都得到了解决，文章后面都会讲到。
Node.js 是 Javascript 在服务端的运行环境，构建在 chrome 的 V8 引擎之上，基于事件驱动、非阻塞I/O模型，充分利用操作系统提供的异步 I/O 进行多任务的执行，适合于 I/O 密集型的应用场景，因为异步，程序无需阻塞等待结果返回，而是基于回调通知的机制，原本同步模式等待的时间，则可以用来处理其它任务，





- Node.js 进程创建
  child_process 是 Node.js 的内置模块 
  child_process.spawn()  适用于返回大量数据 图像处理，二进制数据处理
  child_process.exec() 小量数据，maxBuffer 默认值为 200 * 1024 超出这个默认值将会导致程序崩溃，数据量过大可采用 spawn。
  child_process.execFile() 不能通过 shell 来执行，不支持像 I/O 重定向和文件查找这样的行为
  child_process.fork()  衍生新的进程，进程之间是相互独立的，每个进程都有自己的 V8 实例、内存，系统资源是有限的，不建议衍生太多的子进程出来，通长根据系统** CPU 核心数**设置
  const cpus = require('os').cpus();
  两个cpu，每个cpu有4个核，那么总核数就是8。

  无论是 child_process 模块还是 cluster 模块，为了解决 Node.js 实例单线程运行，无法利用多核 CPU 的问题而出现的

  Inter-Process Communication,即进程间通信