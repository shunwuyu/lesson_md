- const 里面的属性元素可以变？
    <!-- 说出他的错误 1.js -->
    1. const的行为与let基本相同，一个重要的区别是：用const声明变量时必须同时初始化变量，且尝试修改const声明的变量会导致运行时报错
    2. const声明的限制只适用于它指向的变量的引用
        const变量引用的是一个对象，那么修改这个对象内部的属性并不违反const限制

- var  let const 
    ECMAScript 变量是弱类型的，意思就是变量可以用于保存任何类型的数据，每个变量只不过是一个用于保存任意值的命名占位符。
    var message;
    不初始化的情况下，变量会保存一个特殊值undefined。
    var messgae = "hi";
    message = 666; // 合法，但不推荐
    作用域
    function test() {
        var message = "hi"; // 局部变量
    }
    var操作符定义的变量会成为包含它的函数的局部变量
    在函数内部定义变量时省略var操作符，可以创建一个全局变量
    function test() {
        message = "hi"; // 全局变量
    }test();
    console.log(message);

    在同一个作用域内，反复多次使用var声明同一个变量也是没问题的：
    function test() {
    var message = "hi";
    var message = false;
    var message = 666;

    console.log(message); 
    }
    - 提升
    只提升声明，不提升赋值操作。

    - let
        let 和 var 的作用差不多，但有着非常重要的区别
        - 块作用域
            if (true) {
                let message = "hi";
                console.log(message); // hi
            }
            console.log(message);
        - if (true) { 
            // error: 无法重新声明块范围变量“a”
            let a;
            let a;
        }
        let 不允许同一个块作用域中出现冗余声明：

        var和let声明的并不是不同类型的变量，它们只是指出变量在相关作用域如何存在

        - 暂时性死区
            let声明的变量不会在作用域中被提升：

         在ES6规范有一个词叫做Global Enviroment Records(也就是全局环境变量记录)，它里面包含两个内容，一个是Object Enviroment Record，另一个是Declarative Enviroment 
         Record。函数声明和使用var声明的变量会添加进入Object Enviroment Record中，而使用let声明和使用const声明的变量会添加入Declarative Enviroment Record中
        var  Object Enviroment Record
        let Declarative Enviroment Record

        
- useRef 作用
    1. 获取DOM元素的节点
    2. 获取子组件的实例
    3. 渲染周期之间共享数据的存储
        state不能存储跨渲染周期的数据，因为state的保存会触发组件重渲染

- 受控组件和非受控组件
    React中的组件根据是否受React控制可分为受控的(controlled)和非受控的(uncontrolled)。
    - 受控组件
        html 标签
        1. 受控组件通过props获取其当前值，并通过回调函数(比如onChange)通知变化
        2. 表单状态发生变化时，都会通知React，将状态交给React进行处理，比如可以使用useState存储
        3. 受控组件中，组件渲染出的状态与它的value或checked属性相对应
        4. 受控组件会更新state的流程
    - 非受控组件
        非受控组件将数据存储在DOM中，而不是组件内，这比较类似于传统的HTML表单元素。
        1. 非受控组件的值不受组件自身的state和props控制
        2. 非受控组件使用ref从DOM中获取元素数据

- css 行内元素和块级元素的区别
    block
        独占一行
        可以设置height,width,padding,margin
        一般情况下可以包含其他内联元素或者块级元素
        宽度缺省时，默认为100%，占满和整个父级元素的宽度
    inline
        不会换行，连续排列
        width 和 height 属性将不起作用。
            垂直方向的内边距padding、外边距margin以及边框border会被应用但是不会把其他处于 inline 状态的盒子推开。
            水平方向的内边距padding、外边距margin以及边框border会被应用而且也会把其他处于 inline 状态的盒子推开。
        行内元素只能包含数据和其他行内元素
        默认为基线对齐，即text-align = baseline

    inline-block
        width,height,margin,padding,border都起作用，但是不会换行
        是上述两种类型的综合
    display:inline-block带来的问题
    1. 一、inline-block的元素放在一起会产生间隙
        包裹inline-block的父元素指定font-size:0
        标签不换行
    二、inline-block元素放在一起垂直方向对齐问题
    三、内部包含文本、图片的inline-block会与周围inline-block元素产生垂直方向偏移

- 判断一个对象是不是数组？  
    https://juejin.cn/post/7075928358088867871
    1. typeof 不能满足需求  object
    2. instanceof
        通过查找原型链来检查某个变量是否为某个类型数据的实例

    - instanceof底层是如何工作的
        1. 运算符
        2 instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象原型链中的任何位置
            如果A instanceof B，那么 A 必须是一个对象，而 B 必须是一个合法的 JavaScript 函数
        - instanceof 的作用
            用于判断一个引用类型是否属于某构造函数；
            还可以在继承关系中用来判断一个实例是否属于它的父类型。
            和typeof的区别：
            typeof在对值类型number, string, object, boolean, function, undefined, symbol 这七种类型是精准的；但是，对于对象{ } 、数组[ ] 、null 都会返回object，
            为了弥补这一点，instanceof 从原型的角度，来判断某引用属于哪个构造函数，从而判定它的数据类型

            通过构造函数来判断
             var a = [1, 2, 3];
      console.log(a.__proto__.constructor === Array); //true
      console.log(a.__proto__.constructor === Object);


    - 通过toString( )函数来判断
        Object.prototype.toString.call(arr)
    - 通过Array.isArray( )函数来判断

- 闭包
    - LHS 和 RHS 查询  
        查询目的是 变量赋值 还是 查询
        LHS 可以理解为变量在赋值操作符(=)的左侧
        RHS 可以理解为变量在赋值操作符(=)的右侧
        var a = 2;    // LHS 查询
        引擎做了一个 LHS 查询，找到 a ，并把新值 2 赋给它
    - function foo(a) { // LHS 查询
        console.log( a ); // RHS 查询 引擎对变量a的查找目的就是 查询
    }

    foo( 2 ); // RHS 查询

    引擎想对变量进行获取 / 赋值，就离不开 LHS 和 RHS ，然而这两个操作只是手段，到哪里去获取变量才是关键。LHS 和 RHS 获取变量的位置就是 作用域。

    作用域 指程序中定义变量的区域，它决定了当前执行代码对变量的访问权限。

    作用域链    7.js
        词法作用域
            静态作用域
        


    - 全局作用域：
    - 函数作用域：
    - 跨级作用域

    闭包
        能够访问其他函数内部变量的函数，被称为 闭包。
        简化 
            闭包就是函数内部定义的函数，被返回了出去并在外部调用
        应用场景
            闭包的应用，大多数是在需要维护内部变量的场景下。
            1. 单例模式

- this 箭头函数和普通函数
    - 普通函数中this
        指向它的直接调用者
    - 默认情况下，没有直接调用者，this指向window
    - 严格模式下（设置了’use strict’），this为undefined
    - 当使用call，apply，bind（ES5新增）绑定的，this指向绑定对象

- ES6箭头函数中this
    简化了函数的定义
    1）默认指向定义它时，所处上下文的对象的this指向
    2）即使是call，apply，bind等方法也不能改变箭头函数this的指向

- 原型和原型链
    [source](https://juejin.cn/post/6934498361475072014)
    引用类型 四个规则
    1. 引用类型，都具有对象特性，即可自由扩展属性
    2. 引用类型，都有一个隐式原型 __proto__ 属性，属性值是一个普通的对象
    3. 引用类型，隐式原型 __proto__ 的属性值指向它的构造函数的显式原型 prototype 属性值。
    4. 当你试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么它会去它的隐式原型 __proto__（也就是它的构造函数的显式原型 prototype）中寻找。

规则一
    引用类型，都具有对象特性，即可自由扩展属性：

- css 垂直居中
    - 仅居中元素定宽高适用
        absolute + 负margin
        absolute + margin auto
        absolute + calc
    - 居中元素不定宽高
        absolute + transform
        lineheight
        writing-mode
        table
        css-table
        flex
        grid

        
