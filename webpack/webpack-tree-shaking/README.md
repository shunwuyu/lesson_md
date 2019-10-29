## webpack 发展
webpack 0 配置

1. 开发环境不会 three shaking
2. webpack 4 production 自带 three shaking


## 注意点
three shaking 依赖：使用ES6模块
1. 如下两种写法
```js
// import includes from 'lodash/includes';
import { includes } from 'lodash'
```
解决：  `使用 es 模块版本` `babel-plugin-import`

## 参考

[官网](https://webpack.docschina.org/guides/tree-shaking/#%E5%B0%86%E6%96%87%E4%BB%B6%E6%A0%87%E8%AE%B0%E4%B8%BA-side-effect-free-%E6%97%A0%E5%89%AF%E4%BD%9C%E7%94%A8-)

- 使用 ES2015 模块语法（即 import 和 export）。
- 确保没有 compiler 将 ES2015 模块语法转换为 CommonJS 模块（这也是流行的 Babel preset 中 @babel/preset-env 的默认行为 - 更多详细信息请查看 文档）。
- 在项目 package.json 文件中，添加一个 "sideEffects" 属性
