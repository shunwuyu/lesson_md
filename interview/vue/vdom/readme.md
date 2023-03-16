[source](https://juejin.cn/post/6844903870229905422)

- 虚拟 DOM
    虚拟 DOM 为Vue带来了跨平台的能力
    uniapp  
    - 虚拟 DOM 最大的优势是 diff 算法，减少 JavaScript 操作真实 DOM 的带来的性能消耗
    - 虚拟 DOM 最大的优势在于抽象了原本的渲染过程  实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序

    虚拟 DOM 到底是什么，说简单点，就是一个普通的 JavaScript 对象，包含了 tag、props、children 三个属性。

    <div id="app">
    <p class="text">hello world!!!</p>
    </div
    DOM 是树形结构 JavaScript 对象就能很简单tes的表示
    虚拟 DOM 提升性能的点在于 DOM 发生变化的时候，通过 diff 算法比对 JavaScript 原生对象，计算出需要变更的 DOM，然后只对变化的 DOM 进行操作，而不是更新整个视图
    