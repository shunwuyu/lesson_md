## Action
Action 是把数据传到 store 的有效载荷
1. 本质上是 JavaScript 普通对象
2. action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量.

## Reducer

1. 如何响应 actions 并发送到 store 
2. reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state
3. 纯函数，只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。

## store
提供 getState() 方法获取 state；
- 返回应用当前的 state 树
提供 dispatch(action) 方法更新 state；
- 分发 action。这是触发 state 变化的惟一途径
通过 subscribe(listener) 注册监听器;
- 添加一个变化监听器。每当 dispatch action 的时候就会执行