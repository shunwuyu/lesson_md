- https://juejin.cn/post/7142690757722243102#heading-19

- 输出什么? 为什么? 
    1.js
- promise 输出
- async/await, generator, promise这三者的关联和区别是什么
    generator-demo
    - 异步解决方案有哪些？
        回调函数  优点简单   缺点为了顺序会发生回调地狱
        promise
            ES6 异步编程方案 主要通过then解决回调地狱的问题
        generator 
              是 ES6 引入的一种特殊的函数，它的执行结果可以被暂停和重新启动，从而用于异步编程。它的核心是 Generator 函数和 yield 关键字，它们可以将一个长时间执行的任务分成多个部分执行，每执行完一部分就可以暂停下来等待后续任务的执行，从而实现异步编程。
        async await 简洁  同步化
            ES8 引入的一种异步编程方案 
            更加优雅和简便的方式来编写异步代码
            async await 关键字，它们可以更自然地编写异步代码，避免回调函数的嵌套。



- postion属性大概讲一下, static是什么表现? static在文档流里吗
    static 是元素在文档流中的默认定位方式
    并且不可使用 top、bottom、left、right 和 z-index 属性，也无法使用 margin 的负值来改变元素的位置。static 在文档流里，可以看作是元素的默认定位方式

- BFC
    1. Block Formatting Context  块级格式化上下文
    2. 是 Web 页面中的一种渲染模式
    3. 指一个独立的渲染区域
    4. 具有一定的渲染规则
    - 渲染规则
        1. BFC 是一个独立的渲染区域，内部的元素布局不受外部影响，外部也无法影响内部。
        2. BFC 内部的盒子在竖直方向一个接一个地排列，相邻盒子之间的垂直方向距离由相邻盒子的 margin 值决定，在同一个 BFC 下，相邻盒子的 margin 值会发生重叠。
        3. 在一个 BFC 容器中，每一个盒子的左边缘会触碰到容器的左边界，就算是浮动元素也不例外。这个可以避免盒子被浮动元素覆盖。
        4. 通过触发 BFC 的方式可以清除浮动，这是因为浮动元素会脱离文档流，不参与正常布局，从而导致父容器高度无法被撑开的问题。触发 BFC 后父容器会自动包含浮动元素，从而计算出正确的高度值。
        5. BFC 可以用来实现多列布局，只需要将多列的盒子放在同一个 BFC 容器内即可。

- webpack  
    1. plugin 
        css  分离   压缩
        js  tree-shaking
    2. loader 
        url-loader  图片base64 
        clean-webpack-plugin  
        html-webpack-plugin
    3. 手写loader

Webpack 是一个现代 JavaScript 应用程序的静态模块打包工具，它可以处理 JavaScript、CSS、静态资源等多种类型的文件，将它们打包成一个或多个包(bundle)。在项目开发中，我们可以通过 Webpack 对模块进行管理(es6)、优化(tree shaking)和分离(css js分离)，实现更好的代码组织、模块化开发、提升代码执行效率和减小打包文件大小（tree shaking）等多个方面的优化目标。

- vue3  响应式为什么比vue2 快
    - const shallowProxy = new Proxy(target, {
  get(target, key) {
    // 获取对象值的操作
    // ...
  },
  set(target, key, value) {
    // 设置对象值的操作
    // ...
  }
}, 'shallow');
    - 在Vue3中，使用Proxy对象实现了懒递归的响应式。懒递归是一种优化技术，它在数据被访问时才会进行依赖收集，而不是在数据被创建时就进行依赖收集。这种方式可以减少不必要的依赖收集和更新，从而提高性能。

    懒递归的实现方式是利用了JavaScript中的“惰性计算”特性，即只有在需要的时候才进行计算。在Vue3中，Proxy对象会在响应式数据被访问时生成一个“getter”，该“getter”会进行依赖项的收集，并返回响应式数据对应的值。当响应式数据被更新时，在“setter”函数中会触发相应的依赖项更新。这种方式避免了在响应式数据被创建时就进行依赖项的收集和更新，从而减少了不必要的性能损失。

    const reactive = (target) => {
  return new Proxy(target, {
    get(target, key) {
      // 依赖项收集
      track(target, key);

      // 返回响应式数据对应的值
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      // 更新响应式数据对应的值
      const result = Reflect.set(target, key, value);

      // 触发依赖项更新
      trigger(target, key);

      return result;
    }
  });
};
惰性函数
https://github.com/mqyqingfeng/Blog/issues/44  