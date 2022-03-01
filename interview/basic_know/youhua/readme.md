![](https://juejin.cn/book/6844733750048210957/section/6844733750102720526)

- 从输入 URL 到显示页面这个过程中  网络层面有哪些
  1. DNS 解析
  2. TCP 连接
  3. HTTP 请求/响应

  1.2 努力有限

- HTTP 优化方向是？
  - 减少请求次数
  - 减少单次请求所花费的时间

- 怎么做？
  资源的压缩与合并   webpack 

- webpack 优化方面
  - webpack 的构建过程太花时间  vite 
  - webpack 打包的结果体积太大

- 优化构建时间
  babel-loader 无疑是强大的，但它也是慢的。
    include exclude  避免不必要的转译
    exclude: /(node_modules|bower_components)/,

    如果我们选择开启缓存将转译结果缓存至文件系统，则至少可以将 babel-loader 的工作效率提升两倍
    webpack_sd
    babel-loader?cacheDirectory=true 
    
    DllPlugin
      vendor: [
        'prop-types',
        'babel-polyfill',
        'react',
        'react-dom',
        'react-router-dom',
      ]
      new webpack.DllPlugin({
        // DllPlugin的name属性需要和libary保持一致
        name: '[name]_[hash]',
        path: path.join(__dirname, 'dist', '[name]-manifest.json'),
        // context需要和webpack.config.js保持一致
        context: __dirname,
      }),

      vendor-manifest.json
      第一次后优化以下就好

      new webpack.DllReferencePlugin({
        context: __dirname,
        // manifest就是我们第一步中打包出来的json文件
        manifest: require('./dist/vendor-manifest.json'),
      })

- 文件结构可视化，找出导致体积过大的原因
    tree-shaking

- Gzip 压缩原理
  request headers 
  accept-encoding:gzip

  HTTP 压缩是一种内置到网页服务器和网页客户端中以改进传输速度和带宽利用率的方式。在使用 HTTP 压缩的情况下，HTTP 数据在从服务器发送前就已压缩：兼容的浏览器将在下载所需的格式前宣告支持何种方法给服务器；不支持压缩方法的浏览器将下载未经压缩的数据。最常见的压缩方案包括 Gzip 和 Deflate。

  Gzip 的内核就是 Deflate，目前我们压缩文件用得最多的就是 Gzip。可以说，Gzip 就是 HTTP 压缩的经典例题。

  首先要承认 Gzip 是高效的，压缩后通常能帮我们减少响应 70% 左右的大小。
  