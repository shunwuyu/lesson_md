[source](https://time.geekbang.org/column/article/119046)

执行上下文  变量提升、作用域、闭包等。
javascript是如何运行的？

```

showName()
console.log(myname)
var myname = '极客时间'
function showName() {
    console.log('函数showName被执行');
}
```

函数或者变量可以在执行之前使用， 
删除第三行
三个结论
1. 在执行的过程中， 若使用了未生命的变量， 那么JavaScript执行会标错。
   未定义
2. 在一个变量使用之前， 不会报错， 但是该变量的值为undefined, 而不是定义
时的值。
3. 在一个函数定义之前使用它， 不会报错， 且函数能正常运行。

JS代码不是一行行执行的。
变量和函数的处理结果为什么不一样？

## 变量提升

var myname = '极客时间';
var myname = undefined;
myname = '极客时间'

所谓的变量提升， 是指在JavaScript代码执行过程中， JavaScript 引擎，
把变量的声明部分和函数的声明部分提升到代码开头的行为。 变量被提升后，
会给变量设置默认值， 这个默认值是undefined

手写变量提升的过程

函数和变量在执行之前都提升到了代码开头

实际中， 变量和函数声明在代码中的位置是不会改变的， 而是在编译阶段
被Javascript引擎放入内存中。

一段JavaScript代码在执行前需要JavaScript引擎编译， 编译完成后， 
才会进入执行阶段。

1. 编译阶段
- 变量提升部分的代码
- 执行部分的代码

一段代码， 经过编译后， 会生成两部分内容：执行上下文， 和可执行代码。
执行上下文， 是JavaScript执行一段代码时的运行环境。 
```
VariableEnvironment:
     myname -> undefined, 
     showName ->function : {console.log(myname)
```

2. 执行阶段
