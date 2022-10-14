1. loader 转换的时候 不全是正则替换 比如 babel-loader 就不能 const 替换为 var
   需要先转换为 ast 抽象语法树 遍历树 进行替换
   webpack 使用的解析ast的工具：
   [解析ast-acorn](https://www.npmjs.com/package/acorn)
   
2. plugin
   1. webpack 在其内部对象上创建了各种钩子
   2. 插件将自己的方法注册到钩子上交给webpack
   3. webpack 调用

3. webpack 使用了 tapable 这个库 协助实现对于整个构建流程的步骤控制，
   tapable 定义了主要的构建流程之后，使用 tapable 添加了各种各样的钩子方法来讲 webpack 扩展至功能十分丰富 这个就是 plugin 的机制
4. tapable 两类钩子
   1. async
   2. sync