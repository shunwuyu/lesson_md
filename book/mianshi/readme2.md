# ES6 知识点
- 如何监听对对象的读写？  Proxy 
Proxy 可以实现什么功能？
    Proxy对象用于创建一个对象的代理, 是用于监听一个对象的相关操作
    代理对象可以监听我们对原对象的操作。
    ```
    let p = new Proxy(target, handler)
    ```
    target 需要被Proxy代理的对象，
    handler 一系列的捕获器 比如可以用来自定义 set 或者 get 函数

    proxy/1.js