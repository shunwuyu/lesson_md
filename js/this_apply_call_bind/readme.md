[source](https://juejin.im/post/59bfe84351882531b730bac2)

## this 永远指向最后调用它的那个对象

this 的指向并不是在创建的时候就可以确定的，在 es5 中，永远是this 永远指向最后调用它的那个对象。

## 改变this 的指向
- 使用 ES6 的箭头函数
- 在函数内部使用 _this = this
- 使用 apply、call、bind
- new 实例化一个对象

