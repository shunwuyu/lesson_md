[source](https://juejin.cn/book/6844733750048210957/section/6844733750119497741)

- 最“贵”的操作：改变 DOM 元素的几何属性
  width、height、padding、margin、left、top、border 
- “价格适中”的操作：改变 DOM 树的结构
- 最容易被忽略的操作：获取一些特定属性的值
  即时计算 进行回流
  offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight



- 第一点，过路费交太多了。
我们每一次循环都调用 DOM 接口重新获取了一次 container 元素，相当于每次循环都交了一次过路费。前后交了 10000 次过路费，但其中 9999 次过路费都可以用缓存变量的方式节省下来：
第二点，不必要的 DOM 更改太多了。