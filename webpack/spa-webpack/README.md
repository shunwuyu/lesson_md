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