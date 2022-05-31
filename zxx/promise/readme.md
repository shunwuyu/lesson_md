[source](https://www.zhangxinxu.com/wordpress/2021/05/promise-all-race-any/)

1. 如果直接在脚本文件中定义一个Promise, 结果是?
    函数的第一个参数是会立即执行的
2. 如何控制它什么时候执行？
    用一个函数包裹着它，在需要它执行的时候，调用这个函数就可以了：
    