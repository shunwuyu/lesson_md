[source](https://www.ruanyifeng.com/blog/2022/05/rollup.html)

- rollup 是什么?
    rollup.js 是一个 JavaScript 打包工具

- 打包工具有什么用呢?
    打包工具的作用是，将多个 JavaScript 脚本合并成一个脚本，供浏览器使用 ?
    - 减少http请求数，性能更好
    - 早期的浏览器不支持模块，大型网页项目只能先合并成单一脚本再执行
        es6 import 
    - Node.js 的模块机制与浏览器不兼容，必须通过打包工具进行兼容处理
        requrei module.exports
        require('a.js')

     ES 模块与 CommonJS

- 