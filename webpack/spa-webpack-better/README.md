## webpack webpack-cli
```js
"dev": "webpack --mode development",
"prod": "webpack --mode production"
```
run dev 不会
run prod treeShaking

1. js tree shaking 没有深度
2. css 没有

WebpackDeepScopeAnalysisPlugin 某天才google 实习的时候

## css
html css 分析
css-module [name]__[local]--[hash:base64:5] local 类名 bse64 前5位

从 js 里面踢出去


## 优化
1. magic comment 提取一个异步的文件
2. commonChunk 公共文件 webpack4 optimization
3. runtime 提出：webpack 运行时
```js
runtimeChunk: {
  name: 'runtime'
}
```
webpack 用来连接模块化应用程序所需的所有代码,方法



## 开发
1. 开启代码压缩 uglifyjs-webpack-plugin
2. 面板监控 speed-measure-webpack-plugin
3. 开启通知面板

## 上线
1. 压缩 new UglifyJsPlugin
2. es6 不编译 编译过后变大 不优雅 3 行变 6行
3. 解决 es6 可以 使用 polyfill
4. 前端缓存小负载 webpack-manifest-plugin
5. 真正的 loading 得到所有的资源 计算到底加载了多少
6. 分析打包结果
7. test exclude include
8. 压缩 css js happypack 
9. devtool eval
10. cacahe-loader