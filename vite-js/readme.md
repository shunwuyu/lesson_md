https://juejin.cn/post/6938671679153373214#heading-8

- cnpm 是什么?
- pnpm 呢?
    高性能的 npm
    npm i pnpm -g 
    pnpm config set registry https://registry.npmmirror.com

- pnpm 用法
    pnpm create vite
    pnpm i 
    pnpm run dev 

- <script type="module" src="/src/main.tsx"></script> 代表了什么?
    现代浏览器原生支持了 ES 模块规范，因此原生的 ES 语法也可以直接放到浏览器中执行

- main.tsx  ?
     Vite Dev Server  中间处理
     在读取到 main.tsx文件的内容之后，Vite 会对文件的内容进行编译，大家可以从 Chrome 的网络调试面板看到编译后的结果

    网络  停用缓存  main.tsx  编译结果
    Vite 会将项目的源代码编译成浏览器可以识别的代码，与此同时，一个 import 语句即代表了一个 HTTP 请求，如下面两个 import 语句:
    在 Vite 项目中，一个import 语句即代表一个 HTTP 请求。上述两个语句则分别代表了两个不同的请求，Vite Dev Server 会读取本地文件，返回浏览器可以解析的代码。当浏览器解析到新的 import 语句，又会发出新的请求，以此类推，直到所有的资源都加载完成。

- Vite 所倡导的no-bundle理念?
    利用浏览器原生 ES 模块的支持，实现开发阶段的 Dev Server，进行模块的按需加载，而不是先整体打包再进行加载
    相比 Webpack 这种必须打包再加载的传统构建模式，Vite 在开发阶段省略了繁琐且耗时的打包过程，这也是它为什么快的一个重要原因。

- index.html 放到src 目录下

- 生产环境
    在开发阶段 Vite 通过 Dev Server 实现了不打包的特性，而在生产环境中，Vite 依然会基于 Rollup 进行打包，并采取一系列的打包优化手段
    "build": "tsc && vite build",

- css 问题
    1. 开发体验欠佳 原生 CSS 不支持选择器的嵌套
    styled-components,  CSS 预处理器  stylus 
    ```
    .container .header .nav .title .text {
        color: blue;
    }

    .container .header .nav .box {
    color: blue;
        border: 1px solid grey;
    }
    ```
    2. 样式污染问题。   CSS Modules
    ```
    // a.css
    .container {
    color: red;
    }

    // b.css
    // 很有可能覆盖 a.css 的样式！
    .container {
    color: blue;
    }
    ```
    3. 浏览器兼容问题    PostCSS
    -webkit-、-moz-、-ms-、-o transition
    