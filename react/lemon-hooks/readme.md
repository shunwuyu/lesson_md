[source](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/00_BoilerPlate)

webpack-dev-server
//2. 刷新浏览器
$ webpack-dev-server --inline
//3. 重新加载改变的部分，HRM失败则刷新页面
$ webpack-dev-server  --inline --hot

sources  css 
import "./app.css";
 use: ["style-loader","css-loader?sourceMap"]  
devtool: "source-map",
import "./app.css";



在.babelrc配置了"useBuiltIns": "usage"后，Babel 会在你使用到 ES2015+ 新特性时，自动添加 babel-polyfill 的引用，并且是 partial 级别的引用。按我的理解按需引入 部分引入
Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能
https://cdn.bootcss.com/js-polyfills/0.1.42/polyfill.js   Promise

use: [MiniCssExtractPlugin.loader, "css-loader"]

optimize-css-assets-webpack-plugin  压缩

react  @types/react 环境不一样

<React.Fragment>

