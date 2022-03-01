[source](https://juejin.cn/post/6844903780035592205)
- 设计 Parent  Child 类， 
  Parent  有静态方法  sayHello   name  , Child
  age   怎么写？
  原型链有哪些？
  // 1、构造器原型链
  Child.__proto__ === Parent; // true  函数也是对象
  Parent.__proto__ === Function.prototype; // true
  Function.prototype.__proto__ === Object.prototype; // true
  Object.prototype.__proto__ === null; // true

  // 2、实例原型链
  child.__proto__ === Child.prototype; // true
  Child.prototype.__proto__ === Parent.prototype; // true
  Parent.prototype.__proto__ === Object.prototype; // true
  Object.prototype.__proto__ === null; // true

- React 中继承的例子
  function FC(props){
    return <div>{props.message}</div>
  }
  class CC extends React.Component{
    constructor(props) {
      super(props);
    }
    render(){
      return <div>{this.props.message}</div>
    }
  }

  面向对象
  继承
  super(props) 是个什么玩意？
  React.Component 是个什么玩意？
  render 为什么叫 render
  this.props 前面为什么有个 this
  this 为什么有 props

  react16版本推出了hook功能，这样函数式组件也能总有自身的状态了

- 构造函数、原型对象和实例之间的关系
  ![](https://juejin.cn/post/6844903780035592205)
  Function  原型对象  Function.prototype
  - 原型链有几条线？
    两条 构造器原型链
    实例原型链


- ES6的class继承用ES5如何实现

- ES6 extends 继承做了什么操作
  2.js
  JavaScript高级程序设计-第3版   6.3继承
  寄生组合式继承
  
  1. 把子类构造函数(Child)的原型(__proto__)指向了父类构造函数
  2. 把子类实例child的原型对象(Child.prototype) 的原型(__proto__)指向了父类parent的原型对象(Parent.prototype)。   寄生
  3. 子类构造函数Child继承了父类构造函数Parent的里的属性。使用super调用的(ES5则用call或者apply调用传参)。
    组合
  3.js

- 什么可以设置__proto__ 链接？
  1. new出来的实例的__proto__指向构造函数的prototype，这就是new做的事情。
    - 创建了一个全新的对象。
    - 这个对象会被执行[[Prototype]]（也就是__proto__）链接。
    - 生成的新对象会绑定到函数调用的this。
    - 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
    - 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。
  
  2. Object.create ES5提供的
    4.js
    如何手写Object.create ployfill  不支持ES5的浏览器，MDN上提供了ployfill方案
    Object.create(proto, [propertiesObject]) 
    方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 它接收两个参数，不过第二个可选参数是属性描述符
    if(typeof Object.create !== 'function'){
      Object.create = function(proto){
          function F() {}
          F.prototype = proto;
          return new F();
      }
    }
  3. Object.setPrototypeOf
    es6 哪个方法可以设置原型
    Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
      obj.__proto__ = proto;
      return obj; 
    }
    node.js
    5.js