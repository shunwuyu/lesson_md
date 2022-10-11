https://juejin.cn/post/6844903488304971789
[source](https://juejin.cn/post/6844904115428917255#heading-12)

- this
    - this指向调用者这个关系一定要清楚
        JavaScript的this是在调用阶段(调用方式)进行绑定
        严格模式和非严格模式下又有些不一样， 函数的不同调用方式也导致this有些区别
        this是在执行上下文创建时确定的一个在执行过程中不可更改的变量
        执行上下文 JavaScript引擎在执行一段代码之前(全局代码, 函数内部代码, eval内部代码)将代码内部会用到的一些变量、函数、this提前声明然后保存在变量对象（VO）中的过程
        作用域链也会在保存在这里, 以一个类数组的形式存储在对应函数的[[Scopes]]属性中。
        eval.html
        scope.html https://cloud.tencent.com/developer/article/2034787

        当函数独立调用的时候
        在严格模式下它的this指向undefined
        非严格模式下 当this指向undefined的时候， this指向window;
        作为对象的方法  this指向对象
        使用apply和call,bind   手动指定
        作为构造函数  


    - 要知道改变this指向的几种方式
    - 箭头函数中this的特殊性要能讲清楚
        ES6的箭头函数就是特例，因为箭头函数的this不是在调用时候确定的，这也就是为啥说箭头函数好用的原因之一，因为它的this固定不会变来变去的了
        一个不可以用call和apply改变this的典型