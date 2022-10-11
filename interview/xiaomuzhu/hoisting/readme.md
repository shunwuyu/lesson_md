[source](https://github.com/xiaomuzhu/front-end-interview/blob/master/docs/guide/hoisting.md)

# 预解释  与 变量提升

## 预解释
  第一阶段, 先预先处理， 再执行
  var a = 2;
  - 作用域集合中创建一个名为a的变量, 否则忽略此声明继续进行解析。
  - 询问是否有名为a的变量， 有进行赋值， 否则继续向上级作用域询问。

## 执行环境（上下文）
  executionContextObj = {
    'scopeChain': {    },
    'variableObject': {   }
  }

