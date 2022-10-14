[source](https://juejin.cn/book/6844733763675488269/section/6844733763767762952)

- 手写 call、apply 及 bind 函数
    记忆点是？
    -  不传入第一个参数，那么上下文默认为 window
        严格模式 undefined 
    - 改变了 this 指向，让新的对象可以执行该函数，并能接受参数