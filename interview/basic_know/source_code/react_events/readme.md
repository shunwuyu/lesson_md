[60行代码实现React的事件系统](https://juejin.cn/post/7058444361888956446)

- React 事件系统要做什么？
    1. 需要抹平不同浏览器的差异
    2. 需要考虑所有浏览器事件   

- 让我们来通过react 事件源码学习
    1. SyntheticEvent（合成事件）
    2. 模拟实现的事件传播机制

- 要实现的demo
    1. 事件由内到外
    2. stopPropgation 支持

- 目标是？
    1. JSX中的onClick替换为ONCLICK 点击后的效果不变
    2. 基于React自制一套事件系统

1. react-deom 完成dom 渲染
2. 

