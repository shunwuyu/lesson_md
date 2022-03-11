[source](https://juejin.cn/post/7062258342546620423)
- ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43b0a7d962744ea89f77543044a7336d~tplv-k3u1fbpfcp-watermark.awebp?)
  这张图表示什么？  JS 引擎4部分

- 1.js 输出是啥？ 考察什么？
  undefined  赋值是从左往右进行的
  1. {n:2} 给 a.x 
  2. {n:2} 给 a 
  2.js preA
  原因是 运算符优先级的问题， 加减乘除运算也是从左到右按优先级算一样， . 都比 = 高

## JS 引擎的构成
  四部分构成 Parser 解析器 Interperter 解释器  JIT Compiler JIT 编译器  Garbage Collector 垃圾收集器

  1. 源码经过 Parser 解析成 AST，
    也就是计算机能处理的对象树的结构, 然后用解释器递归的解释每个节点，这就是解释执行的过程。
    缺点： 执行比较慢
  2. 优化速度又引入了 JIT 编译器   优化时间
    经常执行的热点代码编译成机器码直接执行。
  3. 内存是有限制的，要不断的循环清除不再被使用的内存，也就是垃圾回收，这是 GC 做的事情
    优化时间
  
-  JS 引擎的结构 Parser 和 Interpreter（解释器）就行
  ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8348c29b49664efeb2b7c7ec9234fbe8~tplv-k3u1fbpfcp-watermark.awebp?)

- 引入parser
  1. 先介绍  https://astexplorer.net/
  2. 生成我们的

- ObjectExpression节点就是取出AST中的数据构造一个对象返回
  ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2555c9c0f87404d82392001e0bde1a6~tplv-k3u1fbpfcp-watermark.awebp?)

- VariableDeclation 节点
  下面有多个 VariableDeclarator 子节点，这是因为一条声明语句可以声明多个变量，
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5657cc0812e4d9c85a30409008644c9~tplv-k3u1fbpfcp-watermark.awebp?)
  递归的解释每个节点
- Program 根节点，它的解释执行就是解释执行 body 的每一条语句
  Identifier（标识符） 就是取 name 属性 NumericLiteral（数字字面量）就是取 value 属性


- 它外面怎么还包裹了个 ExpressionStatement 节点呢
  因为表达式不能直接执行，语句才是执行的基本单位，那么表达式包裹一层表达式语句

  

