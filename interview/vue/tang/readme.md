[source](https://juejin.cn/post/7217810344696594488)

vue  react 区别
    - 技术栈：Vue是一个完整的框架，而React只是一个库。Vue使用模板语法来编写组件，而React使用JSX
    - 学习曲线：Vue对初学者来说比较友好，因为它采用了模板语法，并且有一个简单的API。React可能需要更多的时间来掌握，因为它需要熟悉JSX和函数式编程等概念。
    - 性能：Vue通常比React快，因为它使用了更少的虚拟DOM操作。Vue的响应式系统也使得数据绑定更加高效。
    - 组件化：Vue和React都支持组件化开发，但Vue的组件化更加灵活和易于理解。Vue也提供了许多内置的指令和组件，可以帮助你快速构建应用程序。
        - 模板语法：Vue使用模板语法编写组件，这种语法更接近HTML，并且可以在模板中直接引用JavaScript变量和方法。这使得Vue组件更容易阅读和理解。
        - 双向数据绑定：Vue的响应式系统使得双向数据绑定更加容易实现。这意味着数据的任何变化都会自动更新视图，并且用户对视图上的输入也会反映到数据模型中。这使得开发人员能够更快地构建复杂的用户界面。
        - 独立样式：Vue允许在组件内编写独立的CSS样式，从而避免了样式名称冲突和全局污染的问题。这使得组件更加可重用和可维护。
        - 自定义事件：在Vue中，组件可以自定义事件并通过它们进行通信。这使得组件更加灵活，可以根据需要进行交互和通信。
        - 插槽：Vue的插槽机制允许在父组件中指定子组件的内容。这使得组件更加灵活，并且可以根据需要进行组合和重用
        Vue的组件化具有很多优点，包括易于阅读和理解、双向数据绑定、独立样式、自定义事件和插槽等特性
    - 生态系统：React拥有更大的生态系统，并且具有更多的第三方库和工具可供选择。Vue的生态系统较小，但也在不断增长。

vue 3 和 vue2 区别
- 更好的性能：Vue.js 3 在内部进行了许多性能优化，从而提高了框架的整体性能和速度。
    - 更快的渲染速度：Vue.js 3 中的虚拟 DOM 算法进行了优化，使得更新和渲染组件的速度更快。
        - Vue.js 3 中的 diff 算法使用了一种称为“优化的渐进式算法" optimized progressive algorithm
            这种算法是基于 Vue.js 2 中的双端队列算法，但对其进行了改进和优化，以提高性能和效率
        - Vue.js 3 中的 diff 算法首先会通过静态分析和编译时优化来减少运行时需要进行的比较操作，从而避免了不必要的开销。接着，它会利用组件模板的结构信息来确定哪些节点是稳定的，哪些是动态变化的，并将它们分别处理，从而避免了对整个组件树的比较操作。
            静态提升   hoistStatic 
        - Vue.js 3 还通过借鉴 React 的 Fiber 架构，采用了任务分片（task chunking）的方式来分割工作量，从而保证了响应性和渲染速度。
            requestIdleCallback()是一个API，用于在浏览器空闲时运行异步任务。时间切片的长度可以因浏览器而异，但通常情况下它们持续几毫秒到几十毫秒不等。
            /react/react-fiber/request-idle-callback.html/1.html
            /react/react-fiber/request-idle-callback.html/2.html
            - 

        

    - 更高效的响应式系统：Vue.js 3 使用了 Proxy 替代 Object.defineProperty 实现响应式系统，这种方式在一些情况下能够提供更高效的性能。
    - 更小的文件大小：Vue.js 3 对内部架构进行了优化，使得默认情况下的包更小，这意味着网页加载速度更快。
    - 更快的组件实例创建：Vue.js 3 采用了编译时模板解析和静态分析的方式来优化组件实例的创建过程，从而提高了创建组件实例的速度。
- 更小的文件大小：Vue.js 3 的文件大小比 Vue.js 2 要小得多，这意味着网页加载速度更快
    - 移除了许多不常用的 API, Vue.js 3 移除了一些不太常用的 API，并将其转换成插件的形式，这使得默认情况下的包更小
    - 改进了 Tree-shaking：Vue.js 3 中的指令和组件都被转化为单独的函数，而不是对象，这样 Tree-shaking 更加高效
    - 改进了内部架构：Vue.js 3 使用了模块化的架构，使得自定义构建更加容易，可以只包含需要的功能，从而减小了包的大小
- 改进的响应式系统：Vue.js 3 改进了其响应式系统，使其更加灵活和易于使用
    使用 Proxy 替代 Object.defineProperty 实现更加高效的响应式系统
- 改进的 TypeScript 支持：Vue.js 3 对 TypeScript 的支持更加完善，可以更轻松地集成 TypeScript 到项目中
    Vue.js 3 的 TypeScript 类型定义比 Vue.js 2 更加准确和完整，使开发人员能够更轻松地编写类型安全的代码。
    在 Vue.js 3 中，对于组件实例中的属性或方法，可以使用 defineComponent 函数来更精确地定义其类型。
    ```
    import { defineComponent } from 'vue';

    export default defineComponent({
    name: 'MyComponent',
    props: {
        // 确定 prop 的类型
        message: String,
        count: {
        type: Number,
        required: true,
        },
    },
    data() {
        return {
        // 确定 data 的类型
        value: '',
        };
    },
    computed: {
        // 确定 computed 属性的类型
        doubleCount(): number {
        return this.count * 2;
        },
    },
    methods: {
        // 确定 methods 中函数的参数和返回值类型
        handleClick(event: MouseEvent) {
        console.log(event);
        },
    },
    });
    ```
    通过 defineComponent 函数更加精确地定义了组件实例的类型，并且确定了组件的 props、data、computed 和 methods 属性的类型。这种方式比在 Vue.js 2 中使用 Vue.extend 来定义组件类型更加精确和类型安全。
    export default {}
- 新的组合 API：Vue.js 3 引入了全新的组合 API，使开发人员能够更轻松地编写可复用的逻辑，并将其与模板分离
- 

v-if和v-for哪个优先级更高呢?
<div v-for='item in itemList' v-if='item.id === 1' >{{item.name}}</div>

v-if是条件渲染，v-for是列表渲染 都是模版语法

这些模版语法不是Javascript原生的，因此需要经过一个编译的过程，将它们转为render函数

经历render函数-->虚拟DOM-->真实DOM 这样的过程,呈现到页面当中

剖析这个问题的关键就是看编译成的render函数。

- 官方提供的编译工具
    [vue2](https://v2.template-explorer.vuejs.org/#%3Cdiv%20id%3D%22app%22%3E%7B%7B%20msg%20%7D%7D%3C%2Fdiv%3E)
    [vue3](https://link.juejin.cn/?target=https%3A%2F%2Ftemplate-explorer.vuejs.org%2F%23eyJzcmMiOiI8ZGl2PkhlbGxvIFdvcmxkPC9kaXY%2BIiwib3B0aW9ucyI6e319)

    [source](https://juejin.cn/post/7217810344696594488)
    :先走v-for的逻辑，再根据v-if的条件去判断是否渲染li这个元素，如果没命中v-if的条件，则渲染一个注释节点。

    这里多少有点浪费性能了，如果我list里面有好多个，但符合v-if条件的却比较少，这样先循环，在判断的逻辑，编译出来的render函数效率就比较低下

    vue3 
    这里是先走v-if，再去走v-for，这样在循环当中，就无需屡次判断，并且能在最大程度上，节约性能。

在V2当中，v-for的优先级更高，而在V3当中，则是v-if的优先级更高。在V3当中，做了v-if的提升优化，去除了没有必要的计算，但同时也会带来一个无法取到v-for当中遍历的item问题，这就需要开发者们采取其他灵活的方式去解决这种问题。

vue的编译过程是

- 先从字符串生成AST --- parse
- 对AST进行优化处理（标记静态节点等）--- optimize
- 将AST对象转为字符串形式的JS代码 --- generate

https://astexplorer.net/

