1. 从require css开始
loader 将任意的文件转成 webpack 可以识别的文件
- 安装依赖   -D
- 产出文件夹
- cross-env  
- node index.js   index.css
- loader    webpack.config.js
我们如何让 webpack 识别 css 呢，答案就在 webpack 给我们提供了 loader 机制
- console.log(a, css)
- bundle.js   webpack 工作的结果 
  bundle 是一个立即执行函数， 把所有模块捆绑在一起的一个巨型的模块
  webpack 讲所有模块打包成了bundle的依赖, 通过对象注入
  0 模块是入口
  __webpack_require__.s 是入口
  __webpack_require__ 引入模块 对  require的封装
  
- eval  看一眼打包后的代码 
- require  改 import   放到单独文件
  webpackJsonp  动态加载
- webpack-chain 
- __dirname 与 cwd

