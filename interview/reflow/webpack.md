- webpack 打包如何优化

webpack 打包优化的点
https://www.cnblogs.com/vvjiang/p/9327903.html
- 定位体积比较大的模块
  拆解 删除   entry  多入口？  react react-dom?
  1. 去掉开发环境下的配置
    webpack中的devtool改为false 不需要热加载这类只用于开发环境的东西。打包到生产环境时通通去掉 
  1. ExtractTextPlugin：提取样式到css文件
  css和js是可以并行下载
  HTTP1.1  
  npm i --save-dev extract-text-webpack-plugin
  2. webpack-bundle-analyzer：webpack打包文件体积和依赖关系的可视化
    webpack-bundle-analyzer分析图
  3. CommonsChunkPlugin：提取通用模块文件
    vendor
    webpack.optimize.CommonsChunkPlugin
  4. 提取manifest:让提取的公共js的hash值不要改变
    filename: 'common.bundle.[chunkhash].js',
  5. 压缩js，css，图片
    base64 
  6. react-router 4 之前的按需加载
  如果使用过Ant Design 一般都知道有一个配置按需加载的功能，就是在最后打包的时候只把用到的组件代码打包

- 删除一些没有用的依赖
  之前写了， 后面没有  tree-shaking

- 公共依赖包的分离
  vue 不需要重新加载  版本
- 开发模式DLL   DLLReference  方式优化
  react编译到内纯中， 时间和效率