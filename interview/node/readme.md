https://juejin.im/post/5eeec838e51d4574134ac467#heading-6

- path 相关API有哪些？
  path 模块提供了一些实用工具，用于处理文件和目录的路径
  join    resolve 区别是？
  path.join()：所有给定的 path 片段连接到一起，然后规范化生成的路径
  path.resolve()：方法会将路径或路径片段的序列解析为绝对路径，解析为相对于当前目录的绝对路径，相当于cd命令
  join是直接拼接字段，resolve是解析路径并返回
  一样， 可以相互替换？  举例
- 
  有这么一个url对象， 你怎么把它做成一个url 字符串

  http://baidu.com:8080/test/h?query=js#node
  解析url 的各个部分， 你会怎么做？
  url.parse：可以将一个url的字符串解析并返回一个url的对象
  url.format:将传入的url对象编程一个url字符串并返回

- nodejs 特色是？
Nodejs 使用了一个事件驱动、非阻塞 IO 的模型。events模块是事件驱动的核心模块
  1. 无需手动设定事件驱动模型
  2. 优雅的错误处理  node 如何做错误处理?
- 前端 DOM 树上的事件 与node evet 区别是？
  不冒泡 逐层捕获等事件行为
  node中异步怎么理解？各个模块间的关系
  Events -> Stream -> fs/net/http(异步)
  继承 EventEmitter 来使得一个类具有 node 提供的基本的 event 方法 emitter(发布者)
  而触发(emit)事件的 cb 则称作 listener.
  - Node.js 中 Eventemitter 的 emit 是同步的
  - 

- node 和前端event loop 区别？
  代码执行区别
  setTimeout是宏任务
  Promise.then则是具有代表性的微任务
  同步(promise函数内) -> 微任务-> 宏任务
  浏览器端的运行方式为，每执行一次宏任务前，将微任务队列进行清空

  不同的宏任务被推进不同的执行栈，setInterval、setTimeout被推进timer栈，io操作被推进poll，setImmediate则被推进check，基本执行顺序是timers => poll栈 => check栈。
  
  node端的运行方式为，每切换一次执行栈，就清空一次微任务，也就是说，将当前队列全部清空后，才会清空微任务。
  v10 版本开始 就有区别了， 用nvm

- Node.js 如何与底层操作系统交互呢，比如读取一个文件的时候，都发生了些啥  
  https://juejin.im/post/5e6ed2fff265da57671bdbd2#heading-12

  ![](https://user-gold-cdn.xitu.io/2020/3/18/170ec7828e3310d0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
  ![](https://user-gold-cdn.xitu.io/2020/3/18/170ec7828e3310d0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
  html css -> webkit 呈现到我们的屏幕上
  JavaScript 交给 -> V8 引擎
  本地的文件, 网络通信， 存储 -> 中间层

  Electron = WebKit + Node 脱离浏览器开发带有 UI 处理的 Node 项目

  ![](https://user-gold-cdn.xitu.io/2020/3/18/170ec7828d7bbb36?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



  编译原理  AST 抽象语法树

  - Node.js 如何与底层操作系统交互呢，比如读取一个文件的时候，都发生了些啥
  - Node.js 是如何处理高并发请求的，如何使得服务器性能被很好的利用的
  - 事件驱动的优势，以及实现方式
