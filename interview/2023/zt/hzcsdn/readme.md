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

    
