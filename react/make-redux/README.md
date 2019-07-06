## 1
我们渲染数据的时候，使用的是一个共享状态 appState
appState.title = null
出现问题的时候 debug 起来就非常困难，这就是老生常谈的尽量避免全局变量

加入 dispatch

## subscribe

## 
createStore 内部的 state 不再通过参数传入，而是一个局部变量 let state = null。createStore 的最后会手动调用一次 dispatch({})，dispatch 内部会调用 stateChanger，这时候的 state 是 null，所以这次的 dispatch 其实就是初始化数据了。createStore 内部第一次的 dispatch 导致 state 初始化完成，后续外部的 dispatch 就是修改数据的行为了。



## jest
describe函数，通过js函数式编程的思想来创建一个作用域，来模块化我们的测试
it is an alias of test

## react-redux
[react-redux](https://segmentfault.com/a/1190000016835400)