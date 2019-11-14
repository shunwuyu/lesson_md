[source](http://jspang.com/posts/2019/08/12/react-hooks.html)

- 2019最火新特性。 原始类的开发方式， 改用了函数形式。
改变了复杂的状态操作形式。
- 用函数的形式代替原来的继承类的形式， state, 预函数
有状态组件（状态）和无状态组件（函数），现在所有的组件都可以用函数来声明。
- hocks 是一种特殊的函数 可以为你的函数型组件注入一些特殊的功能。
React mixin  不再写class 让function 一统江湖。
- useState 是react自带的一个hock函数， 用来声明状态变量。
- useEffect 代替常用生命周期
  Ajax 请求后端数据， 
  当React 要渲染组件时， 会执行。 
  首次渲染， 每次渲染都会调用一次useEffect componentDidMount componentDidUpdate
  componentWillUnmount  解绑副作用 
