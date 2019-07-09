1. loader 转换的时候 不全是正则替换 比如 babel-loader 就不能 const 替换为 var
   需要先转换为 ast 抽象语法树 遍历树 进行替换
   webpack 使用的解析ast的工具：
   [解析ast-acorn](https://www.npmjs.com/package/acorn)
   