## concurrentMode
[深入剖析 React Concurrent](https://zhuanlan.zhihu.com/p/60307571)
[ConcurrentMode以及其他几个模式在线比较](https://codesandbox.io/s/koyz664q35)

由 async mode 改名而来
目标：让 react 整体渲染过程能够优先级排比。
浏览器说起：
1. JS 是单线程的，
2. 浏览器是多线程的，除了 JS 线程以外，还包括：
   1.  UI 渲染线程、
   2.  事件线程、
   3.  定时器触发线程、
   4.  HTTP 请求线程
3. JS 线程是可以操作 DOM 的，如果在操作 DOM 的同时 UI 线程也在进行渲染的话，就会发生不可预期的展示结果，因此 JS 线程与 UI 渲染线程是互斥的。每当 JS 线程执行时，UI 渲染线程会挂起，UI 更新会被保存在队列中，等待 JS 线程空闲后立即被执行。
4. 由第三点存在的问题，假如用户触发一个事件，此时事件放到队尾，假如js线程处理时间过长，事件得不到响应，就是卡顿


flushSync 提高优先级

## Suspense
里面的任何一个组件 promise reslolve 之前都会显示 fallback 的内容，
resolve 之后才会显示组件的内容