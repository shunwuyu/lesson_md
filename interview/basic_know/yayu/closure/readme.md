[](https://juejin.cn/post/6844903475998900237)

- 闭包一般和什么一起将？
    作用域

- 关于闭包的公式
    闭包 = 函数 + ？
    闭包 = 函数 + 函数能够访问的自由变量

- 讲讲闭包， 首先会想到什么？
    不一样一点 
        MDN 对闭包的定义为 (JS作者Microsoft CEO Brendan Eich) 布兰登·艾奇
            闭包是指那些能够访问自由变量的函数。
        什么是自由变量呢?
            自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。

- 怎么理解 从技术的角度讲，所有的JavaScript函数都是闭包
    举个例子

```
var a = 1;

function foo() {
    console.log(a);
}

foo();
```
这也是闭包 

- 所以闭包分角度
    1. 理论角度
        所有的函数。 
        因为它们都在创建的时候就将上层上下文的数据保存起来了
        哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。
    2. 从实践角度：以下函数才算是闭包
        1. 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
            函数嵌套函数  闭包
        2. 在代码中引用了自由变量

- 犀牛书给了这样的闭包定义  
    1.js
    执行上下文栈和执行上下文的变化情况

    1. 进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
    2. 全局执行上下文初始化
    3. 执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈
    4. checkscope 执行上下文初始化，创建变量对象、作用域链、this等
    5. checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出
    6. 执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈
    7. f 执行上下文初始化，创建变量对象、作用域链、this等
    8. f 函数执行完毕，f 函数上下文从执行上下文栈中弹出

    当 f 函数执行的时候，checkscope 函数上下文已经被销毁了啊(即从执行上下文栈中被弹出)，怎么还会读取到 checkscope 作用域下的 scope 值呢？

     f 执行上下文维护了一个作用域链

     ```
     fContext = {
    Scope: [AO, checkscopeContext.AO, globalContext.VO],
    }
     ```

对的，就是因为这个作用域链，f 函数依然可以读取到 checkscopeContext.AO 的值，说明当 f 函数引用了 checkscopeContext.AO 中的值的时候，即使 checkscopeContext 被销毁了，但是 JavaScript 依然会让 checkscopeContext.AO 活在内存中，f 函数依然可以通过 f 函数的作用域链找到它，正是因为 JavaScript 做到了这一点，从而实现了闭包这个概念。


1. 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
2. 在代码中引用了自由变量

```
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();
data[1]();
data[2]();
```

当执行到 data[0] 函数之前，此时全局上下文的 VO 为：
```
globalContext = {
    VO: {
        data: [...],
        i: 3
    }
}
data[0]Context = {
    Scope: [AO, globalContext.VO]
}
```
所以让我们改成闭包看看
```
var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}

data[0]();
data[1]();
data[2]();
```
```
data[0]Context = {
    Scope: [AO, 匿名函数Context.AO globalContext.VO]
}
匿名函数Context = {
    AO: {
        arguments: {
            0: 0,
            length: 1
        },
        i: 0
    }
}
```