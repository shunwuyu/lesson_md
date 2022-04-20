[Javascript异步编程的4种方法](https://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)

- ![](https://www.ruanyifeng.com/blogimg/asset/201212/bg2012122101.jpg)
    从这张图看到了什么？
    队列？  数据结构。 
    如果这是食堂排队， 从打饭阿姨的角度呢？
    一次只能完成一件任务, 我们叫单线程
    如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务，以此类推。

- 单线程的好处， 缺点？
    1. 实现起来比较简单，执行环境相对单纯
    2. 坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行, 页面会卡在那里
        可以设计一个吗？ index.html
        怎么优化？  让 onload 之后在做， 先让主要的页面渲染完, onload 异步执行
    
    Javascript语言将任务的执行模式分成两种：同步（Synchronous）和异步（Asynchronous）。

- 耗时的任务用异步
    1. 读取文件
        1.js
        如果有多个文件， 需要读取怎么办？
        2.js
        如何保证执行顺序呢？
        3.js
    2. ajax.html