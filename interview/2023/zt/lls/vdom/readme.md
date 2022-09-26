[source](https://juejin.cn/post/6844903870229905422)

- 虚拟 DOM 有什么好处?
    1. JSX  =》 VDOM =>　DOM
        VUE  Template VDOM 
    2. DOM Diff 
        性能优化,减少 JavaScript 操作真实 DOM 的带来的性能消耗
    3. 跨平台
        React Native   VDOM => App

    虚拟 DOM 优势不只是diff算法， 减少 JavaScript 操作真实 DOM 的带来的性能消耗， 最大优势是抽象了原本的渲染过程， 实现了跨平台的能力， 而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种GUI。

- 虚拟 DOM 到底是什么？
    就是一个普通的 JavaScript 对象，包含了 tag、props、children 三个属性
    为什么是对象？  DOM 是树形结构，所以使用 JavaScript 对象就能很简单的表示
    把以下JSX 手写虚拟DOM
    ```
    <div id="app">
        <p class="text">hello world!!!</p>
    </div>
    ```
    {
        tag: 'div',
        props: {
            id: 'app'
        },
        chidren: [
            {
            tag: 'p',
            props: {
                className: 'text'
            },
            chidren: [
                'hello world!!!'
            ]
            }
        ]
        }
    原生 DOM 因为浏览器厂商需要实现众多的规范（各种 HTML5 属性、DOM事件），即使创建一个空的 div 也要付出昂贵的代价。虚拟 DOM 提升性能的点在于 DOM 发生变化的时候，通过 diff 算法比对 JavaScript 原生对象，计算出需要变更的 DOM，然后只对变化的 DOM 进行操作，而不是更新整个视图

- 如何将一段 HTML 转换为虚拟 DOM ？
    demo1  先使用 babel，将一段 jsx 代码，转换为一段 js 代码


- virtual-dom  对 DOM 树进行了深度优先的遍历的方法

- diff 算法
    - 比对新老 VDOM 的变化,然后将变化的部分更新到视图上。
    - 是一个函数, 返回一个 patches。
    ```
    const before  = h('div', {}, 'before text')
    const after   = h('div', {}, 'after text')
    const patches = diff(before, after)
    ```
    当我们调用 setState 时，state 内部状态发生变动，再次调用 render 方法就会生成一个新的虚拟 DOM 树，这样我们就能使用 diff 方法计算出新老虚拟 DOM 发送变化的部分，最后使用 patch 方法，将变动渲染到视图中。
    

