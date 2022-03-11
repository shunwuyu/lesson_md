[source](https://juejin.cn/post/6844904031240863758)

1. 运行webpack 一定要写配置文件吗?
  demo1 默认配置
  "build": "webpack ./src/main.js --mode=development"

2. webpack.config.js 先放到根目录下， 再放build/
  webpack 放哪个目录下才适合大项目？

  webpack --config build/webpack.config.js

3. 接下来做哪些？
  js文件打包好了,但是我们不可能每次在html文件中手动引入打包好的js
  js文件名称不是一直是固定的嘛(output.js)？这样每次就不用改动引入文件名称了呀？
  前端缓存
  webpack打包出来的js文件我们需要引入到html中，但是每次我们都手动修改js文件名显得很麻烦
  npm i -D html-webpack-plugin

  defer 属性规定是否对脚本执行进行延迟,直到页面加载为止 
  <script defer src="main.b27c27f1.js"></script></head>

4. 多个入口文件
  多个html-webpack-plugin实例来解决这个问题
  不是单页应用
    chunks  
  
5. 执行这么多次了， 如何确保每次是最新的？
  clean-webpack-plugin
  看花眼了
  ```webpack
    const {CleanWebpackPlugin} = require('clean-webpack-plugin')
    module.exports = {
        // ...省略其他配置
        plugins:[new CleanWebpackPlugin()]
    }
  ```
- 引入其他资源  webpack 资源打包器
    对应的关键字是？ module
    在哪里引入css?
    我们的入口文件是js，所以我们在入口js中引入我们的css文件
    npm i -D style-loader css-loader
    还要考虑什么情况？
      预编译
      npm i -D less less-loader
      嵌入样式
    - css 还要解决什么问题？
      兼容性  postcss
      npm i  postcss-loader postcss-preset-env -D
      module.exports = {
      plugins: [
              require('postcss-preset-env')
          ]
      }

      "browserslist": {
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ],
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ]
      }
      - 还要做什么？  拆分css文件?  js 文件太大， 独立编译， 压缩
        npm i -D mini-css-extract-plugin
        extract-text-webpack-plugin 
        把css样式从js文件中提取到单独的css文件中
        去掉style-loader，它和mini-css-extract-plugin冲突

- 图片 字体、媒体、等文件
  区别是什么？
  file-loader 就是将文件在进行一些处理后（主要是处理文件名和路径、解析文件url），并将文件移动到输出的目录中
  url-loader 一般与file-loader搭配使用，功能与 file-loader 类似，如果文件小于限制的大小。则会返回 base64 编码，否则使用 file-loader 将文件移动到输出的目录中

- babel 转义js
    npm i -D babel-loader @babel/preset-env @babel/core
    - 还需要做什么？
      上面的babel-loader只会将 ES6/7/8语法转换为ES5语法
      对新api并不会转换 例如(promise、Generator、Set、Maps、Proxy等)
      babel-polyfill来帮助我们转换
      .babelrc

- 优化打包速度
  1. 有哪两个配置？
    development production 区别是什么？
    production模式下会进行tree shaking(去除无用代码)和uglifyjs
    mode="production"
  2. 缩小文件的搜索范围 include exclude alias noParse extensions
    - import 'react'时， webpack会采用向上递归搜索的方式去node_modules 目录下找。为了减少搜索范围我们可以直接告诉webpack去哪个路径下查找。也就是别名(alias)的配置。
    - include exclude 同样配置include exclude也可以减少webpack loader的搜索转换时间
    - noParse  当我们代码中使用到import jq from 'jquery'时，webpack会去解析jq这个库是否有依赖其他的包。但是我们对类似jquery这类依赖库，一般会认为不会引用其他的包(特殊除外,自行判断)。增加noParse属性,告诉webpack不必解析，以此增加打包速度。
    - xtensions webpack会根据extensions定义的后缀查找文件(频率较高的文件类型优先写在前面)
    
- HappyPack的基本原理是将这部分任务分解到多个子进程中去并行处理，子进程处理完成后把结果发送到主进程中，从而减少总的构建时间
  npm i -D happypack
  聊下多线程， 聊下压缩  
  cacheDirectory  
- 优化代码压缩时间
- 抽离第三方模块
  webpack内置的DllPlugin DllReferencePlugin进行抽离
  webpack配置文件同级目录下新建webpack.dll.config.js 代码如下
  "dll": "webpack --config build/webpack.dll.config.js"


- loader 本质是？
  1. 就是一个node模块
  2. 打个比喻 榨汁机
    将相关类型的文件代码(code)给它。根据我们设置的规则，经过它的一系列加工后还给我们加工好的果汁（code）

- loader 有哪些原则呢？
  - 单一原则: 每个 Loader 只做一件事； 有利于扩展
  - 链式调用: Webpack 会按顺序链式调用每个 Loader  ['style-loader', 'css-loader', 'less-loader']
    从右向左解析
  - 统一原则: 遵循 Webpack 制定的设计规则和结构，输入与输出均为字符串，各个 Loader 完全独立，即插即用；

- loader 去除代码中的console
- loader 与plugin 区别是什么？
  loader只能一件事
  plugin则是针对整个流程执行广泛的任务
  
  手写plugin
  生命周期中会广播出许多事
  Plugin 可以监听这些事件，在合适的时机通过Webpack提供的API改变输出结果
  plugin相当于可以监控每个环节并进行操作

  下面我们手动开发一个简单的需求,在生成打包文件之前自动生成一个关于打包出文件的大小信息


使用持久化缓存提高构建性能；
使用更好的算法和默认值改进长期缓存（long-term caching）；
清理内部结构而不引入任何破坏性的变化；
引入一些breaking changes，以便尽可能长的使用v5版本。