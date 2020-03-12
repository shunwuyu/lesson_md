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

# q10 get请求传参长度的误区 
  https://juejin.im/post5b44a485e51d4519945fb6b7 (一)
  IE : 2803
  Firefox:65536
  Chrome:8182
  Safari:80000
  Opera:190000
  
# q11 get和post请求在缓存方面的区别
  get请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。
  post不同，post做的一般是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存。
  因此get请求适合于请求缓存。

# q12 类的创建和继承
  https://juejin.im/post/5b44a485e51d4519945fb6b7 (四)
  在这里我们可以看到new了一个空对象,这个空对象指向Animal并且Cat.prototype指向了这个空对象，这种就是基于原型链的继承。
  特点：基于原型链，既是父类的实例，也是子类的实例
  缺点：无法实现多继承
# q13 前端中的事件流
  在DOM标准事件模型中，事件流包括下面几个阶段：
    1.事件捕获阶段
    2.处于目标阶段
    3.事件冒泡阶段
  addEventListener第三个参数 为true时捕获，false时冒泡，默认false （IE只支持事件冒泡）
# q14 图片的懒加载和预加载
  预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。
  懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。
  两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
  懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。

# q15 js的各种位置
  clientHeight：表示的是可视区域的高度，不包含border和滚动条
  offsetHeight：表示可视区域的高度，包含了border和滚动条
  scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
  clientTop：表示边框border的厚度，在未指定的情况下一般为0
  scrollTop：滚动后被隐藏的高度，获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

# q16 js拖拽功能的实现
  
      
