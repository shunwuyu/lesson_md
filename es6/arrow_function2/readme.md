[source](https://juejin.cn/post/6844903616231260174)

1. let func = value => value;
    请写出用传统函数 相等的代码
    1.js

2. 如果要传多个参数怎么办？
    let func = (value, num) => value * num;

3. 如果返回的是对象
    2.js
    let func = (value, num) => ({total: value * num});

4. 与变量的解构结合
    let func = ({value, num}) => ({total: value * num})

    3.js

- 没有 this
    4.html

箭头函数表达式的语法比函数表达式更短，并且不绑定自己的this，arguments，这些函数表达式最适合用于非方法函数(non-method functions)，并且它们不能用作构造函数.