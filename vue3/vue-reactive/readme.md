- 以上代码发生了什么？
    执行 node test.js 之后，你就可以看到 effect 内部的函数会一直调用，每次 count.value 修改之后都会执行
    上面的代码中我们使用 reactive 把普通的 JavaScript 对象包裹成响应式数据了
- effect 内部的函数式如何知道 count 已经变化了呢？
    在 effect 中获取 counter.num1 和 counter.num2 的时候，就会触发 counter 的 get 拦截函数；get 函数，会把当前的 effect 函数注册到一个全局的依赖地图中去。这样 counter.num1 在修改的时候，就会触发 set 拦截函数，去依赖地图中找到注册的 effect 函数，然后执行。
    ![](https://static001.geekbang.org/resource/image/0a/d0/0a3f06629751988996e1f863e0973cd0.jpg?wh=2012x796)
    
