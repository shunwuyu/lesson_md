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

    
- Vue项目中如何解决跨域
    跨域本质是浏览器基于同源策略的一种安全手段
    同源策略（Sameoriginpolicy），是一种约定，它是浏览器最核心也最基本的安全功能

    - 浏览器的限制
        抓包工具抓取接口数据，是可以看到接口已经把数据返回回来

        Webpack Proxy 配置可以通过将请求转发到其他服务器来解决跨域问题
        ```
        module.exports = {
            devServer: {
                // 代理所有以/api开头的请求到http://localhost:3000服务上
                proxy: {
                "/api": {
                    target: "http://localhost:3000",
                    changeOrigin: true,
                    secure: false
                }
                }
            }
        };
        ```
        Webpack DevServer 充当了一个代理服务器的角色，将请求转发到后端服务，从而避免了浏览器跨域访问的限制。

- Class 与 Style 如何动态绑定
    - 对象语法
    <div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>

    data: {
        isActive: true,
        hasError: false
    }
    - 数组语法
    <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}

    style 也是一样

- history有哪些方法吗
    history 这个对象在html5的时候新加入两个api history.pushState() 和 history.repalceState() 这两个API可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录。
    在博客网站中点击文章列表中的某篇文章进入文章详情页时，可以使用pushState方法将当前的URL添加到浏览器历史记录中  
    当用户在视频网站中浏览某个视频时，可以使用pushState方法来将当前视频的URL添加到浏览器历史记录中，这样用户可以通过浏览器的前进后退按钮返回到之前浏览过的视频。但是，在用户切换视频时，网站一般不会使用pushState，因为这样会导致历史记录中充斥着大量的视频URL，不仅会占用大量的内存资源，也会影响用户阅读体验。

- 组件通信方式
    - vue基本功
    - vue基础api运用熟练度
    - 知识广度  provide/inject/$attrs

    - 知道的所有方式
        8 种
    - 按组件关系阐述使用场景

        - ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bf775050e1f948bfa52f3c79b3a3e538~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)
    - props / $emit
        父组件通过props的方式向子组件传递数据，而通过$emit 子组件可以向父组件通信。
    - $children/$parent
        Vue 3 已经不再支持 $parent 和 $children 属性了
    - provide/ inject

    - ref / refs
        vue 2
        vue3  ref + defineExpose 
    - eventBus  vue 3.0 不再支持  provide/inject 
        - mitt 例子  component_comnunicate
    - vuex/pinia
    - localStorage / sessionStorage
    - $attrs与   
        $attrs 是 Vue 3 中新增的属性，用于获取当前组件传递过来的所有非 prop 属性
        ```
        setup(props, { attrs }) {
    // 使用 ref 获取响应式的 $attrs 对象
    const $attrs = ref(attrs)

    // 在模板中使用 $attrs 对象，并动态绑定 style 和 class 属性
    const content = computed(() => $attrs.value.content)
        ```
    常见使用场景可以分为三类:
        父子组件通信: props; $parent / $children; provide / inject ; ref ; $attrs
        兄弟组件通信: eventBus ; vuex
        跨级通信: eventBus；Vuex；provide / inject 、$attrs 

- MVVM
    1. 一种软件架构设计模式， 是一种简化用户界面的事件驱动编程方式
    2. 起源于 MVC 
        促进了前后端分离（前端有自己的Model了）， 提高了前端开发效率
    3. 核心是 ViewModel 层，它就像是一个中转站
        让数据变得更容易管理和使用，该层向上与视图层进行双向数据绑定，向下与 Model 层通过接口请求进行数据交互
        ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/19/16ca75871ec53fba~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

    - view层
        视图层，也就是用户界面
    - Model 层
        数据模型，泛指后端进行的各种业务逻辑处理和数据操控，对于前端来说就是后端提供的 api 接口。
    - ViewModel 层
        前端开发人员组织生成和维护的视图数据层
        从后端获取的 Model 数据进行转换处理，做二次封装，以生成符合 View 层使用预期的视图数据模型
        完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环。

    vuex/pinia 更好的管理VM  层
    - mvvm demo

-  Vue 项目优化点？
    1. 代码层面的优化
        - v-if 和 v-show 区分使用场景
            Vue中的v-if和v-show都用于操控HTML元素的显示和隐藏，但它们的应用场景有所不同
            v-if的特点是在条件不满足的情况下完全不渲染元素，因此在条件变化频繁且条件下的元素较多时，其首次渲染和切换相比较v-show性能较低
            - 当需要在不同的条件下展示不同的元素时，使用v-if，因为它允许我们完全从DOM树中删除元素。
            - 使用v-if来懒惰地渲染条件块
            v-show的特点是在条件不满足的情况下只是将display样式设置为none，而元素仍然存在于DOM树中，因此在需要频繁切换某个元素的可见性时，使用v-show的性能会高于v-if
            - 当需要在不同的条件下展示相同元素时，将同组元素切换显示/隐藏行为容易
            不同元素 ， 同一元素   懒加载   频繁切换

        - computed 和 watch 区分使用场景
            computed_watch_demo
            相同点 二者都是通过监听属性的变化来触发特定的响应函数，以完成特定的业务逻辑。
            区别
                1. computed 是计算属性，通常用于根据已有的响应式数据计算出一个新的值。计算属性是惰性求值的，即只有当其依赖的响应式数据发生变化时，才会重新计算。而 watch 是监听属性，用于监听一个特定的属性的变化，当该属性变化时，watch 提供了一个回调函数来完成特定的操作。
                2. computed 一般用于返回一个计算结果，这个结果会被用于模板中的绑定。而 watch 只能依赖一个特定的属性，并在该属性变化时触发回调。
                3. computed 底层使用了 Object.defineProperty 实现数据劫持（vue3 proxy），所以在支持 ES5 以及以上版本的环境下运行。而 watch 利用了 Vue.js 内部的观察者机制实现，可以在更低版本的浏览器和环境下运行。
            - 场景
                - computed 计算购物车中的商品总价
                - watch   search keywords 

                我们通过监听 keyword 的变化，实时地获取用户输入的搜索关键字，并触发异步请求数据的操作。当异步请求返回数据后，我们通过改变 resultList 的值，实时地更新 DOM 元素。

                我们使用 computed 无法实现，因为 computed 是“懒计算”的，只有“计算属性”的依赖数据发生变化时，computed 才会重新计算。而在这个场景中，我们需要实时地异步请求数据，并更新 DOM 元素，因此使用 watch 更加适合。

        - v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
            - Vue 中要求使用 key 给 v-for 的每个元素绑定一个唯一的键值，目的是为了让 Vue 更高效地使用 diff 算法，减少不必要的元素重新排序和重新渲染。
            - 把 index 作为 key 的缺点是，当数据发生增删操作时，改变其中一个元素的位置时，就会重新渲染整个列表，这是Vue希望避免的。因为 index 是每次更新时都会重新生成的，而 diff算法是根据 key 的比较来判断元素是否变化的。
            - 如果使用唯一的值作为 key，则不仅可以让 Vue 合理地更新列表，还可以提高渲染效率
            还要避免同时使用v-if
            如果 v-for 嵌套 v-if，会导致每次重新渲染时，整个列表都要重新计算 v-if，浪费性能。
            需要注意的是，如果 key 值没有变化，Vue 会复用这个元素，即使它在前一次渲染中被插入另一个位置或被移除了。所以，如果我们使用 v-if 来改变列表的结构，但同时又把 key 值设置成固定的 index，就会导致 Vue 在复用元素时无法正确地判断元素是否变化，从而导致渲染问题和性能问题。
        - 长列表性能优化
            虚拟列表是一种优化长列表性能的方法,它通过只渲染用户当前可见的数据来减少 DOM 操作，可以带来以下几个好处：
            1. 明显优化了页面渲染性能，降低页面卡顿的可能，使用户体验更好
            ```
            const container = ref(null)
            const list = ref([])

            const ITEM_HEIGHT = 50
            const VISIBLE_COUNT = 10

            const viewHeight = computed(() => {
            if (container.value) {
                return container.value.clientHeight
            } else {
                return 0
            }
            })

            const visibleData = computed(() => {
            const start = Math.floor(scrollTop.value / ITEM_HEIGHT)
            const end = start + VISIBLE_COUNT
            return list.value.slice(start, end)
            })
            ```
             ref 获取列表容器的 DOM 节点 container，通过 ref 获取原始数据 list。并定义 ITEM_HEIGHT 表示列表项的高度，VISIBLE_COUNT 表示可见列表项的数量，这两个值可以根据具体情况而定。
             通过 computed 计算容器的可见高度 viewHeight，并利用 scrollTop 计算可见的数据窗口，用 slice 函数从数据源中取出相应的数据。这样，只需要渲染视窗内的数据，就可以大大提高渲染效率。
            2. 减少 DOM 操作，进一步提高性能。由于只渲染用户可视的数据，即使列表数据很多，也不会产生大量无意义的 DOM 操作，减少内存消耗，避免卡顿等问题。
            <template>
            <div ref="container" class="list">
                <div :style="{ height: totalHeight + 'px' }">
                <div v-for="(item, index) in visibleData" :key="item.id"
                    :style="{ transform: 'translateY(' + (index * ITEM_HEIGHT) + 'px)' }">
                    {{ item.text }}
                </div>
                </div>
            </div>
            </template>
            
            虚拟列表在性能优化方面具有明显的优势，可以降低页面卡顿的可能性，并显著提高网页甚至是移动应用的渲染效率。

            渲染虚拟列表对应的代码实现包含两个模块，一模块是监控滚动条变化并计算可视视窗内的列表项（如上文中所示）；另一模块是利用得到的可视数据渲染视窗内的数据，达到“虚拟”的效果。
            ![](https://pic4.zhimg.com/v2-7c21394d91b861eb5894f7b2e455096f_r.jpg)

        IntersectionObserver

    - 事件的销毁
        onUnmounted   移除事件  interval 
    - 图片资源懒加载
        以下是使用 vue3 实现图片懒加载的代码，需要安装 vue3-lazyload 包。
        ```
        <template>
  <div>
    <!-- 使用 v-lazy 指令绑定图片的路径 -->
    <img v-lazy="imgUrl" alt="图片">
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { lazyload } from 'vue3-lazyload';

export default defineComponent({
  directives: { 
    lazy: lazyload, // 将 v-lazy 指令绑定 vue3-lazyload 插件导出的指令
  },
  data() {
    return {
      imgUrl: 'https://xxx.com/xxx.jpg',
    };
  },
});
</script>
        ```
        - 自定义指令
        - 使用 Intersection Observer API 监视需要懒加载的图片是否在可视区域内，如果在可视区域内就将图片的路径赋值给 src 属性，从而实现图片的懒加载。
        ```
        <template>
  <div v-highlight>This element will be highlighted when clicked.</div>
</template>

<script>
import { defineDirective } from 'vue';

export default {
  setup() {
    // 创建 v-highlight 自定义指令
    const highlightDirective = defineDirective((el) => {
      // 给元素绑定点击事件监听函数
      const handleClick = () => {
        // 点击后给元素添加高亮背景色
        el.style.backgroundColor = 'yellow';
      };
      el.addEventListener('click', handleClick);

      // 在指令钩子结束时移除事件监听函数
      return {
        beforeUnmount() {
          el.removeEventListener('click', handleClick);
        },
      };
    });

    // 将 v-highlight 绑定到自定义指令上
    return {
      directives: {
        highlight: highlightDirective,
      },
    };
  },
};
</script>
        ```
        
    - 路由懒加载
    - 第三方插件的按需引入
    - 服务端渲染 SSR or 预渲染
        SEO  
        Vue 预渲染是一种技术，它能够将 Vue 单页面应用（SPA）预先生成静态页面，提升首屏加载速度和搜索引擎的有效索引。

- Webpack 层面的优化
    - Webpack 对图片进行压缩
    ```
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: '[name].[ext]',
              outputPath: 'images/'
            },
    ```
    - 减少 ES6 转为 ES5 的冗余代码
        - 避免使用过多的语法糖
            ```
            const name = "Tom";
            console.log(`Hello, ${name}!`);
            ```
            ```
            const name = "Tom";
            console.log("Hello, " + name + "!");
            ```

    - 提取公共代码
        ```
        const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    other: './src/other.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      template: './src/index.html'
    })
  ]
};
        ```
        使用了 Webpack 的 SplitChunks 插件，并将所有在 node_modules 目录下的代码都打包到 vendors.bundle.js 文件中。通过这个配置，我们可以有效地提取公共代码，以优化打包文件的大小。

    - 提取组件的 CSS
    - 优化 SourceMap
        - sourcemap 是一种映射关系，它将打包后的代码映射回原始源代码，用于方便调试。
    - Vue 项目的编译优化
        - 开启 production 模式
        - App Bundle 被仔细拆分
            SplitChunksPlugin 和 BundleAnalyzerPlugin
        - Tree Shaking
        - 使用 CDN 引入静态资源
            可以减轻服务器的压力，提高页面的加载速度

    - 基础的 Web 技术的优化
        - 开启 gzip 压缩
        - 浏览器缓存
        - CDN 的使用
        - 使用 Chrome Performance 查找性能瓶颈

- 虚拟DOM
    - 虚拟 DOM 是一个JavaScript对象，用于描述DOM结构。与真实的DOM相比，虚拟DOM是在内存中虚拟出来的，因此不会对页面性能造成负面影响。虚拟DOM使用类似于HTML标记的结构定义了DOM的节点、属性和内容等信息。
        tag props  children

    - 虚拟 DOM 的主要作用是减少DOM的操作。基于真实DOM的操作是非常耗费性能的，因为每次操作都会触发浏览器的渲染，并且一些操作会引起其他节点的重新渲染和页面回流（reflow, 其实也会优化）。而虚拟DOM则可以避免这些性能问题。虚拟DOM将所有的DOM操作转化为JavaScript对象上的修改，通过算法和数据操作进行视图的变化，从而大大提升了页面的性能和响应速度。 
    - 虚拟DOM会预先计算出对比前后两个DOM树的差异，然后只对差异部分进行更新，避免了大量无用的DOM操作，从而提高了页面的效率
        diff 算法
    - 开发效率、跨平台兼容性、灵活性和数据安全
        组件化开发的能力，能够将页面拆分成更小的组件，提高了开发的效率和可维护性。虚拟DOM也能够更为方便地实现跨平台兼容性，
- VDOM 优缺点
    - 跨平台
        虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染 rn 开发。
    - 无需手动操作 DOM
        只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，提高我们的开发效率
    - 保证性能下限
        框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；

    缺点
        - 资源消耗问题
            虚拟DOM需要在内存中维护一个完整的DOM树，包括节点、属性和内容等信息，因此会占用额外的内存。此外，虚拟DOM的算法和数据操作也
            会占用一定的CPU资源，对性能有一定的消耗。
        - 一定的初始化成本
            在大规模渲染的场景下，可能需要花费较长的时间来初始化虚拟DOM。
        
- 虚拟 DOM 实现原理
    - 用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；
    - diff 算法 — 比较两棵虚拟 DOM 树的差异；
    - pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。

- 如何实现数据双向绑定
    数据变化更新视图，视图变化更新数据
    - 输入框内容变化时，Data 中的数据同步变化。即 View => Data 的变化。
        View 变化更新 Data ，可以通过事件监听的方式来实现
    - Data 中的数据变化时，文本节点的内容同步变化。即 Data => View 的变化。
        Vue 的数据双向绑定的工作主要是如何根据 Data 变化更新 View。
        - 实现一个监听器 Observer
            defineProperty/ proxy
            对属性都加上 setter 和 getter
            给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
        - 实现一个解析器 Compile
            解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
        - 实现一个订阅者 Watcher
            Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。
        - 实现一个订阅器 Dep：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。

