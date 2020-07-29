https://juejin.im/post/5e7426d15188254967069c00#heading-9

1. javascript 单线程  是说 http ajax , setTimeout 事件都是单线程吗？

问题一: 渲染进程里的input标签上传图片，通过与浏览器主进程通信，主进程读取硬磁盘图片数据返回给渲染进程，渲染进程里的js发起ajax请求，是通过浏览器主进程去调用网络进程发起请求，还是渲染进程可以直接调用网络进程发起请求？
  xmlhttprequest 可以直接走网络进程，不需要浏览器进程介入
渲染进程
  https://www.cnblogs.com/yiyi17/p/8645830.html
  1.js引擎（JS内核) 单线程
  2. GUI渲染线程 
    负责渲染浏览器界面，包括解析HTML、CSS、构建DOM树、Render树、布局与绘制等
    当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行
  3. 事件触发线程 微任务 宏任务
    听起来像JS的执行，但是其实归属于浏览器，而不是JS引擎。
      队列的队尾
  4. http请求线程 
  5. 定时触发器线程  浏览器定时计数器并不是由JavaScript引擎计数、
浏览器的事件任务队列
  js单线程 = js引擎线程
  https://www.cnblogs.com/yiyi17/p/8645830.html

1. 了解v8引擎吗，一段js代码如何执行的  https://juejin.im/post/5e7426d15188254967069c00#head  ing-9
2. 执行上下文有多少种 全局执行上下文 函数执行上下文 Eval 函数执行上下文  
  - 执行上下文的生命周期
    创建阶段 → 执行阶段 → 回收阶段
1. JavaScript 的内存机制是什么。
  闭包  引用式赋值  动态  作用域 隐式类型转换 
2. 堆？
3. JavaScript需要直接管理内存吗？
  不需要   c++  java 需要
4. JavaScript 有多少种类型  8种
  Boolean  Null   Undefined  Number   BigInt 
  String  Symbol  Object 
5. 拷贝操作 
5. 堆  栈的区别   为什么需要两个？ 
  栈用来执行上下文的切换
  1、堆空间的内存是动态分配的，一般存放对象，并且需要手动释放内存  堆空间比较大 堆空间一般存放对象本身，block的copy等
  2. 栈空间的内存是由系统自动分配，一般存放局部变量，比如对象的地址等值，不需要程序员对这块内存进行管理 栈空间比较小 栈空间中一般存储基本数据类型，对象的地址
  1. 栈区(stack)— 由编译器自动分配释放 ,存放函数的参数值,局部变量的值等。
  2. 堆  一般由程序员分配释放, 若程序员不释放,程序结束时可能由OS回 收

6. c 代码在干嘛？ 
7. javascript 代码是如何回收的？

 内存中存放的位置不同 

 存储执行上下文的

 setname的作用域[[Scopes]]中有Closure(foo)


 1. JSON.parse(JSON.stringify(...))

function copy(src){
let dest;
dest = JSON.parse(JSON.stringify(src));
return dest;
}
缺点：无法拷贝函数

2. Object.assign({}, source)

function copy(src){
let dest;
dest = Object.assign({}, src);
return dest;
}
缺点：只能拷贝一层

3. function copy(src) {
let dest;
        if (typeof src !== 'object') return ;
        dest = src instanceof Array ? [] : {};
        for (let key of Object.keys(src)) {
            dest[key] = typeof src[key] === 'object' ? deepCopy(src[key]) : src[key];
        }
        return dest;
}
循环引用
https://www.jianshu.com/p/1b212581a8d5  


# 13 垃圾回收：垃圾数据是如何自动回收的？

我们把这种数据称为垃圾数据

内存会越用越多，所以我们需要对这些垃圾数据进行回收，以释放有限的内存空间。

手动回收和自动回收
char* p = (char*)malloc(2048);
free(p)；
p = NULL 
如果这段数据已经不再需要了，但是又没有主动调用 free 函数来销毁，那么这种情况就被称为内存泄漏。IOS崩溃

如 JavaScript、Java、Python 等语言，产生的垃圾数据是由垃圾回收器来释放的，并不需要手动通过代码来释放。

误解 内存

栈中的垃圾数据”和“堆中的垃圾数据”是如何回收的。

记录当前执行状态的指针（称为 ESP）

要回收堆中的垃圾数据，就需要用到 JavaScript 中的垃圾回收器了

代际假说
代际假说有以下两个特点：第一个是大部分对象在内存中存在的时间很短，简单来说，就是很多对象一经分配内存，很快就变得不可访问；第二个是不死的对象，会活得更久。


## JavaScript 引擎 V8 的视角，来分析 JavaScript 代码是如何被执行的。

