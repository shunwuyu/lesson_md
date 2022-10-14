[source](https://juejin.cn/book/6844733763675488269/section/6844733763780345864)

https://juejin.cn/post/7040750959764439048

- 将 ES6 转换为 ES5
- 支持在 JS 文件中 import CSS 文件
- babylon  js 解析器
- 抽象语法树的构建
- Babel 将我们 ES6 的模块化代码转换为了 CommonJS（如果你不熟悉 CommonJS 的话，可以阅读这一章节中关于 模块化的知识点） 的代码，但是浏览器是不支持 CommonJS 的，所以如果这段代码需要在浏览器环境下运行的话，我们需要自己实现 CommonJS 相关的代码，这就是 bundle 函数做的大部分事情。
- 首先遍历所有依赖文件，构建出一个函数参数对象
- 对象的属性就是当前文件的相对路径，属性值是一个函数，函数体是当前文件下的代码，函数接受三个参数 module、exports、 require
    module 参数对应 CommonJS 中的 module
    exports 参数对应 CommonJS 中的 module.export
    require 参数对应我们自己创建的 require 函数
- 接下来就是构造一个使用参数的函数了，函数做的事情很简单，就是内部创建一个
- 函数参数中找到 ./entry.js 对应的函数并执行，最后将导出的内容通过 module.export 的方式让外部获取到
- 最后再将打包出来的内容写入到单独的文件中

- Vite为什么快呢？快在哪？说一下我自己的理解吧
    Vite最大的优点就是 快！！！非常快
    我都有点不想回到以前Webpack的项目开发了，因为之前的项目启动项目需要30s以上，修改代码更新也需要2s以上，但是现在使用Vite，差不多启动项目只需要1s，而修改代码更新也是超级快！！！

    1. 以前的浏览器是不支持ES module的
    ```
    import { add } from './add.js'
    import { sub } from './sub.js'
    console.log(add(1, 2))
    console.log(sub(1, 2))

    // add.js
    export const add = (a, b) => a + b 

    // sub.js
    export const sub = (a, b) => a - b 
    ```
    放到浏览器能直接运行吗? 答案是不行的哦
    那怎么解决呢？这时候打包工具出场了
    将index.js、add.js、sub.js这三个文件打包在一个bundle.js文件里，然后在项目index.html中直接引入bundle.js，从而达到代码效果。一些打包工具，都是这么做的，例如webpack、Rollup、Parcel

    项目启动：随着项目越来越大，启动个项目可能要几分钟
    代码更新：随着项目越来越大，修改一小段代码，保存后都要等几秒才更新
    ## 解决启动项目缓慢
    Vite在打包的时候，将模块分成两个区域依赖和源码：
    依赖：一般是那种在开发中不会改变的JavaScript，比如组件库，或者一些较大的依赖（可能有上百个模块的库），这一部分使用esbuild来进行预构建依赖,esbuild使用的是 Go 进行编写，比 JavaScript 编写的打包器预构建依赖快 10-100倍

    源码：一般是哪种好修改几率比较大的文件，例如JSX、CSS、vue这些需要转换且时常会被修改编辑的文件。同时，这些文件并不是一股脑全部加载，而是可以按需加载（例如路由懒加载）。Vite会将文件转换后，以es module的方式直接交给浏览器，因为现在的浏览器大多数都直接支持es module，这使性能提高了很多，为什么呢？咱们看下面两张图：

    第一张图，是以前的打包模式，就像之前举的index.js、add.js、sub.js的例子，项目启动时，需要先将所有文件打包成一个文件bundle.js，然后在html引入，这个多文件 -> bundle.js的过程是非常耗时间的。

    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1d2df8227ed4640af5d3d2ddfb849e7~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

    第二张图，是Vite的打包方式，刚刚说了，Vite是直接把转换后的es module的JavaScript代码，扔给支持es module的浏览器，让浏览器自己去加载依赖，也就是把压力丢给了浏览器，从而达到了项目启动速度快的效果。
    ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f56ff49a8704589ace3f3711fea5b10~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

    ## 解决更新缓慢
    刚刚说了，项目启动时，将模块分成依赖和源码，当你更新代码时，依赖就不需要重新加载，只需要精准地找到是哪个源码的文件更新了，更新相对应的文件就行了。这样做使得更新速度非常快。

    Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

    ## 生产环境 
    刚刚咱们说的都是开发环境，也说了，Vite在是直接把转化后的es module的JavaScript，扔给浏览器，让浏览器根据依赖关系，自己去加载依赖。
    那有人就会说了，那放到生产环境时，是不是可以不打包，直接在开个Vite服务就行，反正浏览器会自己去根据依赖关系去自己加载依赖。答案是不行的，为啥呢：
    1、你代码是放在服务器的，过多的浏览器加载依赖肯定会引起更多的网络请求
    2. 为了在生产环境中获得最佳的加载性能，最好还是将代码进行 tree-shaking、懒加载和 chunk 分割、CSS处理，这些优化操作，目前esbuild还不怎么完善

所以Vite最后的打包是使用了Rollup


