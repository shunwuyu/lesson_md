[source](https://juejin.cn/post/6844903704873664520)
[babel](https://babeljs.io/repl/#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKGn6w6EALogK7DEqIAUaYAtvAJRa74fEAWAlhAHT0m0ALzQh8ANzs8AX2wzoEMAE8AEvBAgUNVjg4dE8YmUQYA5F03aANNACS0RtHPQA1NG59BjKYvmKJGDEPMDQ6CAqAMqqGlo6eoqGxqYWVvHm_gocAObG4r66bAb4RiZmLgDW8ABuPGjm0hwBHBD5EnTwAO4Acr6JJXiEaKgg8PzaOTTmaN0FwoBccoBY_64es739WQFAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.18&externalPlugins=)

- es6 class  与es5 的区别有哪些
  1. 一定要用new 调用  6.js
  2. 类的内部所有定义的方法， 都是不可枚举的(non-enumerable) 1.js 

- es6 和es5 是如何对应的
  1. constructor 1.js  2.js
  2. 实例属性 3.js  index.html
  3. 静态方法  4.js
  4. 静态属性  5.js
  5. getter 和 setter 7.js  8.js

 ES6 的 class 和 ES5 的构造函数是如何对应
 ES6 的 class 可以看作一个语法糖，它的绝大部分功能，ES5 都可以做到  对象原型的写法更加清晰、更像面向对象编程的语法而已

 ```
  class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return 'hello, I am ' + this.name;
    }
}

 ```

1. 先是传统写法
2. Object.keys区别
3. 实例属性

## getter 和 setter


## Babel 编译

