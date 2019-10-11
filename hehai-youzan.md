## 写在前面
- 以下伪代码，以供 **现场面**，可以边写边讲解。
## 题目
1. react 高阶组件知道吗？
   - React 中用于组件逻辑复用的一种高级技巧
   - 有两种 高阶组件的定义方式：
   - 接受一个组件，并且返回一个组件（其1: 属性代理）
    ```js
    function withCom(WrappedComponent) {
      // ...并返回另一个组件...
      return class extends React.Component {
        // 公共逻辑 公共逻辑 公共逻辑
        // 通过增强原组件的 props 增强原组件功能
        render() {
          return <WrappedComponent />;
        }
      };
    }
    ```
    - 高阶组件继承于被包裹的组件（其2: 反向继承）
    ```js
    const MyContainer = (WrappedComponent) => 
    class extends WrappedComponent { 
      render() { 
        if (this.props.loggedIn) { 
          return super.render(); 
        } else { 
          return null; 
        } 
    }
    ```
    - 区别
    区别1:
    属性代理：生命周期的过程类似于，堆栈调用：
    被包裹组件didmount→HOC didmount→HOC will unmount→被包裹组件unmount
    反向继承：类似于队列
    被包裹组件didmount→HOC didmount→被包裹组件will unmount→HOC will unmount
    区别2:
    属性代理：方便劫持 props
    反向继承：调用WrappedComponent的 render 方便劫持渲染，
    - 优缺点
    优点：当然不用说，就是组件公共逻辑的抽离
    缺点：
      1. 会丢失 被包裹组件的 `static` 属性，比如 用于显示 组件名的 `static`
      2. 组件嵌套 层次过深
2. react  hooks 了解吗？
  - Hook 是 React 16.8 的新增特性,它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
  - 基础 hook 介绍：
    1. useState function 组件也能拥有 state
    2. useEffect 简化生命周期
  - 解决了 利用 高阶组件 抽离组件公共逻辑带来的问题(这条是重点，必须说)。 
3. 说一下 js 的继承有多少种吧。
  1. 原型链继承
  ```js
   function Parent1() {
    this.name = ['super1'];
    this.reName = function () {
      this.name.push('super111')
    }
  }
  function Child1() {
  }
  Child1.prototype = new Parent1()
  var child11 = new Child1()
  var child12 = new Child1()
  var parent1 = new Parent1()
  console.log('child11', child11);
  child11.reName()
  console.log(child11.name, child12.name) // [ 'super1', 'super111' ] [ 'super1', 'super111' ], 可以看到子类的实例属性皆来自于父类的一个实例，即子类共享了同一个实例
  console.log(child11.reName === child12.reName)
   // 缺点：1. 子类实例共享属性，造成实例间的属性会相互影响 2. 不能继承父类属性
  ```
  2. 构造函数继承
  ```js
   function Child2() {
      Parent1.call(this, 1)
    }
    // 缺点：1. 不能继承 父类的方法
  ```
  3.  组合继承
  ```js
  function Child3() {
    Parent3.call(this) // 第一次调用 生成子类的实例属性(但是不包括父对象的方法)
  }
  Child3.prototype = new Parent3() // 第二次调用
  // 父类构造函数被调用两次
  ```
  4.  原型式继承
  ```js
  function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
  }

  var person = {
      name:'jack',
      friends:['allen','lucy','van']
  }

  var anotherPerson = object(person);
  anotherPerson.name = 'bob';
  anotherPerson.friends.push('steve');

  var yetAnotherPerson = object(person);
  yetAnotherPerson.name = 'linda';
  yetAnotherPerson.friends.push('shelly')

  console.log(person.friends); //["allen", "lucy", "van", "steve", "shelly"]
  // 引用类型值的属性始终都会互相影响
  ```
  5.  寄生继承: 和工厂模式类似（把继承的过程封装），用于批量生产出同个类型的对像，
  ```js
  function createAnother(original){
    var clone = object(original); // 通过调用 object() 函数创建一个新对象
    clone.sayHi = function(){  // 以某种方式来增强对象
      alert("hi");
    };
    return clone; // 返回这个对象
  }
  ```
  6.  寄生组合（es6 class）
  ```js
  function object(o){
    function F(){}
    F.prototype=o;
    return new F();
  }
  function inheritPrototype(subType,superType){
    var prototype =object(superType.prototype);
    prototype.constructor=superType;//原书是prototype.constructor=subType，看书时认为这里应该是superType
    subType.prototype=prototype;
  }
  function SubType(name,age){
      //继承SuperType 属性
      SuperType.call(this,name);
      this.age=age;
  }
  // 继承方法
  inheritPrototype(SubType,SuperType);
  // 完美
  ```

1. 说一下你对原形链的理解？Object的原形链是什么？
   1. 不大确定面试官想问啥，只能写代码告诉它
   ```js
    Object.__proto__ === Function.prototype
    true
    Function.prototype.__proto__ === Object.prototype
    true
    Object.prototype.__proto__ === null
    true
    ```
2. 了解ES6吗？说一下你了解的Es6?
   1. let / const
   2. 函数，字符串，数组的扩展
   3. Map / set
   4. Proxy
   5. Promise
   6. Generator
   7. Es Module
3. 说一下你对promise的理解吧
   1. 这题应该是上一题延伸出来的
   2. 新的异步的解决方式，将异步代码转换为同步代码的书写方式。
4. 你知道 堆排序吗？说出它的实现
   1. 
5.  数组扁平化，你有几种方法？ 
    1.  reduce
    ```js
    function fn(arr){
        return arr.reduce((prev,cur)=>{
            return prev.concat(Array.isArray(cur)?fn(cur):cur)
        },[])
    }
    ```
    2. 
    ```js
    function flatten(arr) {
      var res = [];
      arr.map(item => {
          if(Array.isArray(item)) {
              res = res.concat(flatten(item));
          } else {
              res.push(item);
          }
      });
      return res;
    }
    ```

6.  Event loop 知道吗？
    1.  有两个队列 存储 macroTask(task) / microTask 任务
    2.  Event Loop执行一次，从task队列中拉出一个task执行
    3.  Event Loop继续检查microtask队列是否为空，依次执行直至清空队列
    4.  重复第二步
    例子
    ```js
    console.log(1)
    setTimeout(() => {
        console.log(2)
        new Promise(resolve => {
            console.log(4)
            resolve()
        }).then(() => {
            console.log(5)
        })
    })

    new Promise(resolve => {
        console.log(7)
        resolve()
    }).then(() => {
        console.log(8)
    })

    setTimeout(() => {
        console.log(9)
        new Promise(resolve => {
            console.log(11)
            resolve()
        }).then(() => {
            console.log(12)
        })
    })
    ```
7.  koa洋葱模型知道吗？解释一下吧。
    1.  组合了 koa 的中间件
    2.  画图，画一个洋葱，解释 会执行到最深层的一个中间件，然后依次退出执行
8.  说一下CSS优先级顺序
    1.  important
    2.  行内样式  （1000）
    3.  id选择器  （100）
    4.  类选择器  （10）
    5.  元素选择器 伪元素 （1）div p.sith{}                ====》12
   
9.  说一下position
    1.  static
    2.  relative
    3.  absolute
    4.  stick
10. 说一下盒模型
    1.  content box
    2.  border box
11. 说一下你所知道的垂直居中的方法
    1.  flex
    2.  margin 负值
    3.  translate
12. 你知道call,apply吗？说出它们的区别
    - 绑定 this
    - apply 参数是数组
    - call 参数 一一展开
13. 利用call或apply说出bind的实现代码(口说)
    利用 call apply 返回一个函数
    ```js
    Function.prototype.myBind = function (context) {
      const _this = this
      const args = [...arguments].slice(1)
      // 返回一个函数
      return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        // if (this instanceof F) {
        //  return new _this(...args, ...arguments)
        // }
        return _this.apply(context, args.concat(...arguments))
      }
    }
    ```
14. 说出new的实现代码
    1. 说出基本过程
    2. 创建一个对象
    3. 返回一个对象
    4. 中间 绑定对象的 this
    5. 继承函数的 prototype
    ```js
    function _new(fn, ...arg) {
      const obj = {}; //创建一个新的对象
      obj.__proto__ = fn.prototype; //把obj的__proto__指向fn的prototype,实现继承
      var t = fn.apply(obj, arg) //改变this的指向
      return Object.prototype.toString.call(t) == '[object Object]'? t : obj //返回新的对象obj
    }
    ```
15. 你知道跨域吗？如何解决有几种方法？说明一下
    1.  cors
    2.  jsonp
    3.  iframe
    4.  代理
16. vue和react都是SPA单页面应用，那么你了解vue-router和react-router的原理你了解吗？利用了浏览器的什么事件你知道吗？
    1.  h5 history api
    2.  hashChange
17. 你知道webpack吗？比如tree shaking之类的问题。我只知道这一个，其他都没有说出来.



1. 蒋廷文 自己投递简历 50 +  明天有面试
2. 徐文韬 
3. 杨鹏 不着急自己有安排
4. 谢镇 自己看面试 简历在写 未开始投递
5. 王梦琦 杭州



6. 梦龙  自己状态还不错 有投简历

  - [source](https://juejin.im/post/5cfa17a46fb9a07ef1617429)
    1. 什么是webpack
      webpack是一个静态模块处理器（bundler），当它处理应用程序时，它会递归地构建一个关系依赖图，其中包含应用程序需要的每个模块，然后把所有这些模块打包成一个或多个包。 
      ![](https://webpack.github.io/assets/what-is-webpack.png)
    2. 核心概念
      - entry（入口）
        webpack要使用哪些模块，作为内部依赖图的开始
      - output（出口）
        告诉webpack在哪里输出它所构建的bundles，以及如何命名这些文件
      - loader
        把文件转换成webpack能处理的模块
        - test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
        - use 属性，表示进行转换时，应该使用哪个 loader。
      - plugin 从打包优化和压缩，一直到重新定义环境中的变量。
      - Chunk
        一个 Chunk 由多个模块组合而成，用于代码合并与分割
      - tree shaking 
        Tree-shaking的本质是消除无用的js代码
        DCE Dead Code Elimination   
        程序中没有执行的代码 (如不可能进入的分支，return 之后的语句等
        导致 dead variable 的代码(写入变量之后不再读取的代码)
        如果把代码打包比作制作蛋糕。传统的方式是把鸡蛋(带壳)全部丢进去搅拌，然后放入烤箱，最后把(没有用的)蛋壳全部挑选并剔除出去。而 treeshaking 则是一开始就把有用的蛋白蛋黄放入搅拌，最后直接作出蛋糕。
        ["es2015", {"modules": false}]
    3. 打包过程
      1. 初始化：启动构建，读取和合并参数，加载plugin，实例化complier
      2. 从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。
      3. 输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。
    4. [webpack 4 新特性](https://segmentfault.com/a/1190000013970017)
      - mode 属性
      - 插件和优化
        webpack4删除了CommonsChunkPlugin插件，它使用内置API optimization.splitChunks 和 optimization.runtimeChunk ，这意味着webpack会默认为你生成共享的代码块。
      - 开箱即用WebAssembly
        WebAssembly(wasm)会带来运行时性能的大幅度提升
      - 支持多种模块类型
      - 0CJS
