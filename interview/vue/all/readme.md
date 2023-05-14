https://juejin.cn/post/7204844328111374391

- defineProperty 和 proxy 区别
    - 兼容性
      defineProperty ES5 中被引入，因此支持任何支持 ES5 版本的浏览器和环境  有点  
      proxy   是在 ES6 中被引入的新特性，因此只能在支持 ES6 的浏览器和环境中使用
      抛弃ie Edge 12+ 
    - 监听 listen_demo
        通过递归来监听所有属性  1.html   defineProperty
        4.html  proxy 递归调用
         新增的属性或数组不监听
        2.html  数组 defineProperty 有缺点
        只能监听数组索引的读写操作，而无法监听其本身的变化

    - 性能
        defineProperty  性能较好（尤其是访问/写入对象属性）
        proxy 比 defineProperty 慢很多，特别是对于大对象和频繁访问/写入属性的场景  建议 小规模 使用 Proxy 实现数据监听。对于大规模的应用场景，为了避免性能问题，还是需要使用 Object.defineProperty 等底层操作进行处理  毕竟是proxy 对象
    
    - 语法
        defineProperty 使用原生 JavaScript 语法，易于理解和学习
        proxy 使用许多新概念和复杂语法，比如 Reflect 和 handler
        - reflect 对象理解
            Reflect 是 ES6 中新增的一个内置对象
            Reflect.get()
            .set()
            .has()
            对应 .、[]、= 等
            Reflect 对象的出现，主要是把一些操作符的功能，转移到对应的方法上，以达到更好的封装和统一
            它本身并不是一个函数构造器，也不能通过 new 操作符来创建实例，只是一个内置对象。Reflect 方法的调用方式与函数非常类似，可以直接通过 Reflect.方法名() 来调用。

            Reflect 对象提供了一组可以替代一些操作符的方法，同时这些方法都是支持拦截的，可以和 Proxy 结合使用，用于拦截对象的操作，是 JavaScript 语言提供的一个有用的工具对象。
            5.html
    - 限制
        defineProperty 只能监听对象属性，不能监听属性的相关行为，如 delete、has
        proxy 可以监听属性的所有行为
        6.html
    - Map Set 支持
        defineProperty 是针对对象属性的操作方法，并不是与 Map 相关的操作
        7.html

- slot  
    Web组件内的一个占位符, 未来Web Components 技术套件一部分
    后期使用。更好地复用组件和对其做定制化处理
    为什么dialog  form table layout 会使用layout?
    不同的地方有少量的更改，如果去重写组件是一件不明智的事情
    - template 用法
        - 默认slot
            给或不给template
            ```
            <template>
            <div>
                <slot></slot>
            </div>
            </template>
            <my-component>
            <template v-slot>
                <p>This is some content.</p>
            </template>
            </my-component>
            ```
        - 命名插槽
            ```vue
            <template>
            <div>
                <slot name="header"></slot>
                <p>This is some default content.</p>
                <slot name="footer"></slot>
            </div>
            </template>
            <my-component>
            <template v-slot:header>
                <h1>Header</h1>
            </template>
            <template v-slot:footer>
                <p>Footer</p>
            </template>
            </my-component>
            ```        

    
- 如何避免组件样式污染
    scoped   带hash值
    修改组件中的某个样式，但是又不想去除scoped属性 怎么办？ 样式穿透

    ```
    <template>
    <div class="wrap">
        <Child />
    </div>
    </template>

    <style lang="scss" scoped>
    .wrap /deep/ .box{
        background: red;
    }
    </style>

    <!-- Child -->
    <template>
        <div class="box"></div>
    </template>

    <template>
<div class="wrap">
    <Child />
</div>
</template>

<style lang="scss" scoped>
/* 其他样式 */
</style>
<style lang="scss">
.wrap .box{
  background: red;
}
</style>

<!-- Child -->
<template>
  <div class="box"></div>
</template>
    ```

- v-html 有什么用， 有什么问题
    将一个字符串解析为 HTML，然后在页面上显示出来   
    v-html="expression"   expression 是一个包含 HTML 内容的字符串变量
    使用 v-html 有些许风险，因为用户输入的字符串可能包含恶意的脚本，可以对网站进行攻击。
    那怎么办？ 插值
    那为什么还要这个指令呢？  文本编辑器的返回

- 手写vuex?
    vuex 解决问题：存储用户全局状态并提供管理状态API
    - 一个状态管理模式和库，并确保这些状态以可预期的方式变更
    - Store单一状态树存储全局状态
    - api commit(type, payload), dispatch(type, payload)
    - 实现Store时，可以定义Store类，构造函数接收选项options，设置属性state对外暴露状态，提供commit和dispatch修改属性state。这里需要设置state为响应式对象，同时将Store定义为一个Vue插件

    commit(type, payload)方法中可以获取用户传入mutations并执行它，这样可以按用户提供的方法修改状态。 dispatch(type, payload)类似，但需要注意它可能是异步的，需要返回一个Promise给用户以处理异步结果

    https://github.com/shengxinjing/geektime-vue-course/tree/main/mini-vuex-router

- 生命周期  v2  3 对比
    - 创建前/后  内存中  
        v2 beforeCreate  
        v3 onBeforeMount, onCreated
    - 挂载前/后
        v2 beforeMount
        v3 onBeforeMount, onMounted
    - 更新前/后
        v2 beforeUpdate
        v3 onBeforeUpdate, onUpdated
    - 卸载前/后
        beforeDestroy
        v3 onBeforeUnmount, onUnmounted

    - deactivated
        keepalive  被切换到其他路由或组件时被触发，而不是被销毁。
        onDeactivated,
    
    ，Vue 3 在生命周期钩子上进行了一些变更，以更好地支持组合式 API。同时，还添加了一些新的生命周期钩子，如 onRenderTracked 和 onErrorCaptured

    Vue 3 中的钩子函数返回 Promise 后，Vue 会等待其解析完成再进行进一步操作，这意味着开发者可以在生命周期钩子中使用异步代码。



- vue react 区别
    相同点：
    1. virtual dom
        通过操作数据的方式来改变真实的DOM状态
        Virtual DOM的本质就是一个JS对象，它保存了对真实DOM的所有描述，是真实DOM的一个映射，所以当我们在进行频繁更新元素的时候，改变这个JS对象的开销远比直接改变真实DOM要小得多
    2. 组件化的开发思想
        将应用分拆成一个个功能明确的模块，再将这些模块搭积木
    3. Props
        父组件向子组件传递数据  跨组件传递
    4. 构建工具 Chrome插件  框架
        webpack vite
        vue-devtool react-devtool
        vuex/pinia    redux
    不一样
    1. 模版
        Vue鼓励你去写近似常规HTML的模板，React推荐你使用JSX去书写
    2. 状态管理与对象属性
        在React中，应用的状态是比较关键的概念
        useState setState
        vue state对象并不是必须的，数据是由data属性在Vue对象中进行管理。
        ref  data() {}  reactive 
    3. 虚拟DOM的处理方式不同
        Vue中的虚拟DOM控制了颗粒度，组件层面走watcher通知，而组件内部走vdom做diff，这样，既不会有太多watcher，也不会让vdom的规模过大。而React走了类似于CPU调度的逻辑，把vdom这棵树，微观上变成了链表，然后利用浏览器的空闲时间来做diff
        requestIdleCallback 

    
