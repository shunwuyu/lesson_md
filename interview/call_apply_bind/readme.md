[source](https://juejin.im/post/5d469e0851882544b85c32ef#heading-25)
手写bind 为什么是必考考题？
  类型检测   类数组   解构  继承  代码复用， 优化  原型链  
减少重复代码， 节省内存。 this丢失
1. func.call(1);   this 指向
2. arrayLike  添加两个元素， 有什么方法， 不指定key
3. Math.max 除了...外有别的写法吗？
4. 手写 


apply，call 和 bind  函数原型链中相当重要的概念

浅显 -> js基础扎实 -> 基础常用的API

- call,apply,bind的基本介绍
- call/apply/bind的核心理念：借用方法
- call和apply的应用场景
- bind的应用场景
- 手写call/apply、bind

call/apply：fun执行的结果 bind：返回fun的拷贝，并拥有指定的this值和初始参数

1. fun的this指向thisArg对象
2. 非严格模式下：thisArg指定为null，undefined，fun中的this指向window对象.
3. 严格模式下：fun的this为undefined
4. 值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象，如 String、Number、Boolean

调用call/apply/bind的必须是个函数
Object.prototype.toString.call

作用：
改变函数执行时的this指向，目前所有关于它们的运用，都是基于这一点来进行的。

apply是以a开头   a  array

A对象有个方法，B对象因为某种原因也需要用到同样的方法，那么这时候我们是单独为 B 对象扩展一个方法呢，还是借用一下 A 对象的方法呢？

1. 判断数据类型：
2. 类数组借用数组的方法
3. apply获取数组最大值最小值：
4. 继承


# 参数数量/顺序确定就用call，参数数量/顺序不确定的话就用apply。
考虑可读性：参数数量不多就用call，参数数量比较多的话，把参数整合成数组，使用apply。
参数集合已经是一个数组的情况，用apply，比如上文的获取数组最大值/最小值。

# bind的应用场景
  1. 
  for (var i = 1; i <= 5; i++) {
    // 缓存参数
    setTimeout(function (i) {
        console.log('bind', i) // 依次输出：1 2 3 4 5
    }.bind(null, i), i * 1000);
  }
  2. 回调函数this丢失问题：
    this.handleMessage是一个函数内存地址，没有上下文对象，也就是说该函数没有绑定它的this指向。

# 中高级面试题-手写call/apply、bind：


1. 拷贝源函数:
  - 通过变量储存源函数
  - 使用Object.create复制源函数的prototype给fToBind
2. 返回拷贝的函数
3. 调用拷贝的函数：
  new调用判断：通过instanceof判断函数是否通过new调用，来决定绑定的context
  绑定this+传递参数
  返回源函数的执行结果

