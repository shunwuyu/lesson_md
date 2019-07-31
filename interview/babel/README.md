## 常识
babel-preset-stage-x：
JavaScript 还有一些提案，正在通过技术委员会，成为标准的一部分，经历的步骤
1. babel-preset-stage-0 仅仅是个想法
2. babel-preset-stage-1 提议
3. babel-preset-stage-2 草案
4. babel-preset-stage-3 候选
5. babel-preset-stage-4 已完成
## babel
编译器一样，编译过程分为三个阶段：解析、转换和打印输出
```js
const babel = code => code
```
想要 Babel 做一些实际的工作，就需要为其添加插件,
Presets: 作为 Babel 插件的组合

## Babel 的处理步骤
Babel 的三个主要处理步骤分别是： 解析（parse），转换（transform），生成（generate）。
## 抽象语法树（AST）
ast的应用：
1. CoffeeScript、TypeScript、JSX等转化为原生Javascript
2. UglifyJS
3. 浏览器会把js源码通过解析器转为抽象语法树，再进一步转化为字节码或直接生成机器码
## visitor
```js
const MyVisitor = {
  Identifier() {
    console.log("Called!");
  }
}
```
所以当创建访问者时你实际上有两次机会来访问一个节点。enter exit

## path
当走进函数后，我们可以获取path和state两个参数，path包含了当前节点的相关信息，按照前端的思维可以理解为dom节点，可以往上或者往下查找节点，当前节点path包含了很多信息，方便我们编写插件，而state中包含了插件的options和数据，options就是babelrc中plugins引入插件时，添加的options，在state中可以接收到它



## 一些总结
Identifier：变量、常量、函数、语句块等命名