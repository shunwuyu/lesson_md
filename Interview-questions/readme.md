# q1.JavaScript全局执行上下文为你创建了两个东西:全局对象和this关键字
    new 的实现原理:
      1.创建一个空对象，构造函数中的this指向这个空对象
      2.这个新对象被执行 [[原型]] 连接
      3.执行构造函数方法，属性和方法被添加到this引用的对象中
      4.如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。
#call,bind,apply
  https://www.cnblogs.com/pssp/p/5215621.html

#bind, call实现方法
  https://juejin.im/post/5cef46226fb9a07eaf2b7516#heading-14

# q2浅拷贝和深拷贝
  1. 数组的解构：
  https://blog.csdn.net/qq_36838191/article/details/80856656
    let [x, y]= [1, 2];
    // x = 1
    // y = 2
    ------------------------------------------
    数组解构的意义：
    function example() {
      return [1, 2, 3];
    }
    let [a, b, c] = example(); 
  2. 对象的解构：
    let { foo , bar } = { foo: "aaa", bar: "bbb" };
    // foo = "aaa"
    // bar = "bbb"
    另：（允许给赋值的变量重命名）
    let {foo: baz } = {foo:'abc'};
    解析:
    1、 foo 是用来做匹配的，用来去解构对象里面寻找值的
    2、 baz 才是变量名， baz = 'abc'

  浅拷贝只最第一层属性进行了拷贝，当第一层的属性值是基本数据类型时，新的对象和原对象互不影响，但是如果第一层的属性值是 ## 复杂数据类型 ##，那么新对象和原对象的属性值其指向的是同一块内存地址

  深拷贝是将对象及值复制过来，两个对象修改其中任意的值另一个值不会改变

# q4闭包
  闭包是指有权限访问另一个函数作用域中的变量 的函数
   1. 能够访问函数定义时所在的词法作用域（阻止其被回收）
   2. 私有化变量
   3. 模拟块级作用域

# q5数组去重的多种方式
  Set   indexOf   includes   reduce  Map
  https://juejin.im/post/5d124a12f265da1b9163a28d#heading-14

# q6防抖函数实现原理

# q7 typeof 是否正确判断类型? instanceof呢？ instanceof 的实现原理是什么？
  typeof 能够正确的判断基本数据类型，但是除了 null, typeof null输出的是对象
  instanceof可以准确的判断复杂数据类型，但是不能正确判断基本数据类型
  
