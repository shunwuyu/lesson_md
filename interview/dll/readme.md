[source](https://juejin.im/post/5eb55ceb6fb9a0436748297d#heading-6)

1. 不利于SEO   ssr 应用
  nuxt.js

2. 初次加载耗时多
  为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载 
  多入口  vue  bootstrap 单独打包， 缓存  打包速度
  keep-alive
  https://juejin.im/post/5bf61082f265da616a474b5c#heading-27

3. 对ts 的支持
  https://juejin.im/post/5d0259f2518825405d15ae62#heading-34
-  chunkFilename而已，chunkFilename的作用就是用来给拆分后的chunk们起名字的配置项
  点击时 动态加载了
- 前面1.js这玩意也不可读啊，有问题也很难明确，webpack，提供了定义按需chunkname的方式，
- devServer中的hot 
  webpack 两个插件
  module.hot // 开启热替换

- 路由切换时按需加载
  设置作业  b c 名字

- Typescript 中的 interface 和 type 到底有什么区别
  typescript 总会使用到 interface 和 type

  1. 都可以描述一个对象或者函数