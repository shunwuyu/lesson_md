[高频前端面试题汇总之手写代码篇](https://juejin.cn/post/6946136940164939813#heading-2)

[初学JavaScript，浅谈对变量提升的理解](https://juejin.cn/post/6951223024053911560)

1. instanceof 有什么用？
    可不可以再升华下？  toString
    instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
    1.js
    1. 首先获取类型的原型
    2. 然后获得对象的原型
    3. 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null

    2.js

- 实现日期格式化函数
    dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd')
    dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日')
    3.js

- 实现数组去重

1. 程序自上而下的执行的概念，应该输出undefined
    但是，JavaScript并不是一门严格的自上而下执行的语言。
    原因变量提升
    ```
    var a;
    a = 1;
    console.log(a);
    ```
    ```
    var b;
    console.log(b);
    b = 2;
    ```

- 分析原因
    JavaScript在运行时经历了什么
    JavaScript运行时，一共经历了两个阶段
    1. 预编译阶段
        任何代码运行前都会经历预编译阶段，但它占用的时间往往极其短暂，所以我们一般感知不到，它主要是在内存中开辟一些空间以此来存放变量与函数。预编译时，JS会搜集所有的变量声明并且提前声明变量，而其他的语句都不会改变他们的顺序，并且，变量提升后，会给变量设置默认值undefined，给函数赋值函数体。所以你可以认为，预编译后，代码中的变量声明全部被提升到代码开头，其他代码位置不变。

    2. 执行阶段

        ```
        function showName() {
            console.log(1);
        }
        var showName;
        showName();
        showName = function() {
            console.log(2);
        }

        showName();
        ```


所谓的变量提升（变量提升），是指在JS代码执行中， JavaScript引擎（V8）把变量的声明部分和函数的声明部分提升到代码开头的行为，变量提升后，会给变量设置默认值undefined，给函数赋值函数体。
在JS的变量提升中，提升的只是变量的声明，所以对于var a = 1，一般把它拆分成var a 和 a = 1。只提升var a，a = 1不变。
有多个同名变量声明时，函数声明会覆盖其他的声明。如果有多个同名函数声明，则是由最后的一个函数声明覆盖之前所有的声明。

作者：叨叨不是刀刀
链接：https://juejin.cn/post/6951223024053911560
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 对象
- 创建对象的方法有哪些？
    1. 直接字面量创建
        6.js
    2. new关键字创建
        7.js
    3. Object.create()
        请尝试使用Person -》  创建自己
        8.js
        Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
        proto必填参数，是新对象的原型对象，如上面代码里新对象me的__proto__指向person。注意，如果这个参数是null，那新对象就彻彻底底是个空对象，没有继承Object.prototype上的任何属性和方法，如hasOwnProperty()、toString()等。
        不填会怎样？
        proto  null怎样？

        propertiesObject是可选参数，指定要添加到新对象上的可枚举的属性（即其自定义的属性和方法，可用hasOwnProperty()获取的，而不是原型对象上的）的描述符及相应的属性名称
        10.js

        - 手写Object.create
        11.js

    总结
        1. 字面量和new关键字创建的对象是Object的实例，原型指向Object.prototype，继承内置对象Object
        2. Object.create(arg, pro)创建的对象的原型取决于arg，arg为null，新对象是空对象，没有原型，不继承任何对象；arg为指定对象，新对象的原型指向指定对象，继承指定对象

    - 解决疑问
        12.js
