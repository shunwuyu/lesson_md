[JavaScript 的 this 原理](https://www.ruanyifeng.com/blog/2018/06/javascript-this.html)

- 下面两种写法， 有什么区别？
    1.js
    - 差异的原因
        函数体内部使用了this关键字
    - 教科书怎么说
        this指的是函数运行时所在的环境。对于obj.foo()来说，foo运行在obj环境，所以this指向obj；对于foo()来说，foo运行在全局环境，所以this指向全局环境
    - 为什么会这样？函数的运行环境到底是怎么决定的？
        ![](https://www.wangbase.com/blogimg/asset/201806/bg2018061801.png) 可以说下这张图有什么意义吗？
        1. JavaScript 语言之所以有this的设计，跟内存里面的数据结构有关系。
            var obj = { foo:  5 };
            上面的代码将一个对象赋值给变量obj
            JavaScript 引擎会先在内存里面，生成一个对象{ foo: 5 }，然后把这个对象的内存地址赋值给变量obj。
            变量obj是一个地址（reference）。后面如果要读取obj.foo，引擎先从obj拿到内存地址，然后再从该地址读出原始的对象，返回它的foo属性。
            原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的foo属性，实际上是以下面的形式保存的。
            ![](https://www.wangbase.com/blogimg/asset/201806/bg2018061802.png)
        2. 属性的值可能是一个函数
            引擎会将函数单独保存在内存中，然后再将函数的地址赋值给foo属性的value属性。
            ![](https://www.wangbase.com/blogimg/asset/201806/bg2018061803.png)

            由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。
            var f = function () {};
            var obj = { f: f };

            // 单独执行
            f()

            // obj 环境执行
            obj.f()

        3. 环境变量
            JavaScript 允许在函数体内部，引用当前环境的其他变量。
            ```
            var f = function () {
            console.log(x);
            };
            ```
            由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。

            ```
            var f = function () {
             console.log(this.x);
            }
            ```
            

