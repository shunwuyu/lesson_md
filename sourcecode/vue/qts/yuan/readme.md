https://juejin.im/post/5a0e65c1f265da430702d6b9

元编程就能被描述为 “让程序来制作程序”

代码生成 eval try/catch 和 switch
反射Reflection 用于发现和调整你的应用程序结构和语义
Function#name、Function#length  Function#bind、Function#call 和 Functin#apply  typeof、instancesofdelete  JavaScript 也有反射/内省运算符  Object.getOwnProperties

ES6 开始帮助 JavaScript 在元编程上赶上其他语言
ES6 带来了三个全新的 API：Symbol、Reflect、以及 Proxy

- Symbols 是 实现了的反射（Reflection within implementation）—— 你将 Symbols 应用到你已有的类和对象上去改变它们的行为
- Reflect 是 通过自省（introspection）实现反射（Reflection through introspection） —— 通常用来探索非常底层的代码信息。
- Proxy 是 通过调解（intercession）实现反射（Reflection through intercession） —— 包裹对象并通过自陷（trap）来拦截对象行为。

Symbols 是新的原始类型（primitive）。就像是 Number、String、和 Boolean 一样。Symbols 具有一个 Symbol 函数用于创建 Symbol。与别的原始类型不同，Symbols 没有字面量语法（例如，String 有 ''）—— 创建 Symbol 的唯一方式是使用类似构造函数而又非构造函数的 Symbol 函数：

Symbol(); // symbol
console.log(Symbol()); // 输出 "Symbol()" 至控制台
assert(typeof Symbol() === 'symbol')
new Symbol();