this是函数运行时指针， 指向对象由运行方式决定
1. 作为对象的方法调用 this指向对象本身
2. 作为普通函数调用 this指向全局, 严格模式下undefined
3. 构造器调用， this指向实例化后的对象
4. call, apply, bind 手动指定this调用
5. 箭头函数没有自己的this值，箭头函数中所使用的this来自于函数作用域链


[source](https://juejin.im/post/5d23e750f265da1b855c7bbe)

不管是Vue，还是 React，都需要管理状态（state），比如组件之间都有共享状态的需要

比如把状态提升到父组件里，或者给兄弟组件写一个父组件，听听就觉得挺啰嗦

隔离变化
把组件之间需要共享的状态抽取出来，遵循特定的约定，统一来管理，让状态的变化可以预测。

Store 允许使用 store.subscribe 方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。

只要把 View 的更新函数 subscribe 一下，就可以实现 State 变化之后，View 自动渲染了。比如在 React 里，把组件的render方法或setState方法订阅进去就行。

Redux 用一个叫做 Reducer 的纯函数来处理事件。Store 收到 Action 以后，必须给出一个新的 State（就是刚才说的Store 的 State 不能直接修改，每次只能返回一个新的 State），这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。

function getAge(user) {
  user.age = user.age + 1;
  return user.age;
}

let b = 10;
function compare(a) {
  return a >= b;
}

(state, action) => state

为什么叫做 Reducer 呢？reduce 是一个函数式编程的概念，经常和 map 放在一起说，简单来说，map 就是映射，reduce 就是归纳。映射就是把一个列表按照一定规则映射成另一个列表，而 reduce 是把一个列表通过一定规则进行合并，也可以理解为对初始值进行一系列的操作，返回一个新的值。