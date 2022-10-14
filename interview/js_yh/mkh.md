commonjs
  - 旨在web浏览器外为JS建立模块生态系统
    NODE.js 受影响  同步加载

AMD Asynchronous Module Definition 异步模块
  浏览器
  玉伯
  RequireJS    加载很多js  

CMD  Common 通用模块定义
  SeaJS

ES6 import

1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。
2. CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：  
https://www.zhihu.com/question/20351507
define(function(require, exports, module) {   var a = require('./a')   a.doSomething()   // 此处略去 100 行   var b = require('./b') // 依赖可以就近书写   b.doSomething()   // ... })
// AMD 默认推荐的是
define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
a.doSomething()
// 此处略去 100 行
b.doSomething()
...
})

https://github.com/geektime-geekbang/geek-fepo-course/blob/master/example/2.8js_moudules/index.js