[source](https://juejin.cn/post/7230005899505713212)
- vue 指令实现复杂动画
    animation-demo  v3-pwx-demo
    - 基本动画
        1. transition组件：Vue3提供了<transition>组件，可以将元素的进入和离开过渡效果包裹在其中：
            ```
            <transition name="fade">
                <div v-if="show">Hello, world!</div>
            </transition>
            ```
        2. CSS类名：为了定义元素的进入和离开过渡效果，需要在CSS中定义一些特定的类名
            ```
            .fade-enter-active, .fade-leave-active {
            transition: opacity 0.5s;
            }
            .fade-enter, .fade-leave-to {
            opacity: 0;
            }
            ```
            v-enter 动画开始之前的状态
            v-enter-active 进入时的动画效果
            v-enter-to 动画结束时的样式
            v-leave 离开之前的样式，大多数情况下，结束时与开始之前时一样的
            v-leave-active 离开时的动画效果
            v-leave-to 离开后的效果
            ```
            .fade-enter-active, .fade-leave-active {
                transition: opacity 0.5s;
                }
                .fade-enter-from, .fade-leave-to {
                opacity: 0;
                }
                .fade-enter-to, .fade-leave-from {
                opacity: 1;
                }
            ```
    - 复杂  
        - 钩子函数
            before-enter="beforeEnter
            enter="beforeEnter
        - transition group
            处理列表的动态增删操作过渡效果

- DOM事件，怎么设置使得捕获时运行
    - DOM事件有三个阶段：捕获阶段、目标阶段和冒泡阶段。
    - 浏览器先接收到 逐级捕获元素  目标事件  冒泡 退出 
    - 第三个参数为 useCapture  默认值为false
        当它为true时，事件在捕获阶段执行；当它为false(默认值)时，事件在冒泡阶段执行。
    - 
    - load和DOMContentLoaded事件。在这些事件中，浏览器不会像其他事件一样遵循事件流，而是直接在元素加载完毕后或者在文档内容加载完毕后触发事件，不进行冒泡和捕获。

- 柯里化
    - 高阶函数
    - 函数式编程
        函数可以作为参数传递到函数中，这个作为参数的函数叫回调函数，而拥有这个参数的函数就是高阶函数，回调函数在高阶函数中调用并传递相应的参数，在高阶函数执行时，由于回调函数的内部逻辑不同，高阶函数的执行结果也不同，非常灵活，也被叫做函数式编程。
    - 柯里化
        给函数分步传递参数，每次传递部分参数，并返回一个更具体的函数接收剩下的参数，这中间可嵌套多层这样的接收部分参数的函数，直至返回最后结果。

    - 最基本的柯里化
        currying
        1.js
        es5 实现
        - 使用场景
            - 参数收集
            - 延迟求值
                var getXHR = curry(function(method, url, data) {
                    var xhr = new XMLHttpRequest();
                    xhr.open(method, url);
                    xhr.send(data);
                    return xhr;
                });

                var post = getXHR('POST'); //复用 
                var postJSON = post('/api', {name: 'Lucy', age: 18}); // 每次ajax 调用

    - 闭包的应用场景
        MDN  闭包是指那些能够访问自由变量的函数
        自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。

        闭包 = 函数 + 函数能够访问的自由变量
        fContext = {
            Scope: [AO, checkscopeContext.AO, globalContext.VO],    
        }
        应用广泛
            1. 事件循环时 i的值闭包， 块级作用域替代
            2. 防抖节流
            3. 模块化  return   私有变量  封装
            4. 记忆函数 缓存数据， 优化性能
            5. 函数式编程  柯里化  高阶函数 
            6. 

    - vuex
        1. 什么是vuex
        Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式，它集中式地管理了应用程序中的所有组件的状态
        2. 和mvvm 的关系
            在 Vuex 中，Store 也是连接所有组件的数据和行为的桥梁，它包含了应用程序中的所有状态和一些操作状态的方法。可以看作是一个全局的 ViewModel。
            在 Flux 架构中，Store 负责管理所有应用程序中的状态，并使用 Dispatcher 处理状态变化。
            Vuex 是 Vue.js 中 Flux 架构的一种实现。
        3. Model 层一般不仅包括 API，还可能包含本地存储、WebSocket、其他应用程序的数据等
        4. vuex 主要api
            state、mutations、getters、actions 和 modules
        5. mutations 有什么用？
            mutations 是用来处理 Vuex 中 store 数据的同步更改的
            在 Vuex 中，store 的状态（state）是唯一可信来源，而且 Vuex 规定了 mutations 只能进行同步操作，这样就可以追踪状态的变化。
            通过提交（commit）mutations 可以更改 store 中的状态，同时保证状态的不可逆性、可追踪性和可测试性。
            mutations 接收一个 state 参数和一个可选的 payload（载荷，用来传递数据）参数，通过操作 state 实现对数据的更改。
            dispatch 操作提交 mutations，实现对状态的修改
        6. vuex 里面的变量也可以响应式的原因是 
            Vuex 依赖于 Vue.js 的响应式系统实现了对状态的自动响应，从而实现了 store 中状态的可预测性和可控性。
    - vue 响应式原理
        - 2.0
            使用ES5的 Object.defineProperty()方法劫持数据对象的 setter 和 getter 实现数据变化时自动更新视图的特性。
            基于发布订阅模式实现的。数据变化会触发订阅者的更新操作。Vue 中内部实现了一个观察者 Watcher，它会订阅数据变化事件，当数据发生变化时，Watcher 会通过发布者 Dep 将变化通知给所有订阅了该属性的 Watcher，从而触发它们的更新操作，使视图保持与数据的同步。
            Dep addSub  notify  watcher update 
        - Vue 3 使用 Proxy ，利用 ES6 提供的特性，实现数据监听和响应式更新，大大提高了响应式的效率和性能
            通过 Proxy 和 Proxy handler 的使用，Vue 3 在性能和灵活性方面都有了很大的提升

    - 手写 momrize 
        demo
    - target  currentTarget
        target 发生时间在哪个元素
        currentTarget 事件定义在哪个元素上 

- 打包优化做了哪些？
    通过一系列的手段和技术来减小应用程序的打包体积，优化程序的性能，提升用户体验
    - 代码压缩和混淆：通过使用压缩和混淆工具，可以减小代码体积和提升代码安全性
        js  UglifyJS  Terser
        css CSSNano
        Webpack 5 的生产环境配置中
        内置了 Terser 配置，并会自动压缩和混淆 JavaScript 代码，从而减小打包的体积。对于 CSS 部分，Webpack 5 也提供了一些插件，例如 MiniCssExtractPlugin 和 CssMinimizerPlugin，支持将 CSS 代码提取成单独的文件并进行压缩。因此说，在 Webpack 5 中，开发者不需要再为压缩和混淆烦恼，直接在生产环境中使用即可。
    - Tree Shaking  
        Tree shaking 是一种通过静态分析源代码的方法，来去除无用代码（dead code）的优化技术。
        一个模块的导入和导出机制可以被静态分析，从而知道哪些代码是被用到的，哪些代码是没有被用到的。
    - 图片压缩
        图片是占用打包大小的很大一部分，因此可以通过使用图片压缩工具来减小图片的大小，从而减小打包体积。
        base64
        ```
        {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/inline',
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },
        ```
        - 批量webp 格式化 webp_demo
        - Webpack Code Splitting
            只加载当前所需的模块，从而减少初始加载时间。
            vendor
            import 动态加载
        - 资源懒加载
            vue-lazyload
            Vue.use(VueCLazyLoad)
            <img v-lazy="imageUrl">
        - 使用 CDN
            使用 CDN 可以让用户从就近的 CDN 节点获取静态资源，减少网络延迟和带宽消耗，从而提高用户体验。

- 在打包优化中， 挑一个难的讲一讲
    减少 Webpack 打包的文件体积
    - 移除未使用的代码 tree shaking
        const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

        module.exports = {
        optimization: {
            minimizer: [new UglifyJSPlugin()],
        },
        // ...
        };
    - 拆分代码块
        entry: {
    index: './src/index.js',
    vendor: ['react', 'react-dom'],
  },
    output: {
    filename: '[name].[contenthash].js',
  },
    optimization: {
    splitChunks: {
      chunks: 'all',
    },
    },
    - 压缩代码：
        const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  // ...
};
    webpack 5 自动做了很多

- 为什么要做缓存
    在 Web 应用中，缓存是一种常见的优化技术
    - 提高应用程序的性能和可扩展性（CDN缓存）
    - 减少网络中数据传输的时间和带宽消耗
    - 提高用户体验（快）
    - 降低服务器的压力
    HTTP/1.0: Expires/Pragma/Last-Modified；HTTP/1.1: Cache-Control/ETag；HTTP/2: cache-control/support 206
- js 动画缓存怎么做 结合例子讲
    这个 API 可以让浏览器优化动画帧率，以避免浏览器过度渲染和卡顿。通过使用 requestAnimationFrame，可以在浏览器帧之间创造出缓动效果
    animate_cache
    再优化  交给css transition animation

- 淘宝跳转到天猫页面为什么不需要重新登陆( taobao.com 和 tmall.com )
    - 单点登录 SSO Single Sign-On
        会颁发一个包含用户授权信息的令牌
        当用户访问其他受信任的系统时，这个令牌就会被传递给这些系统，以便系统可以验证用户的有效性，并决定是否授予用户访问权限。

        SSO系统就像一把主钥匙，可以解锁多个门以让用户访问多个应用程序，使得用户只需要在登录过一次后就可以畅游各种应用。这种机制减少了用户存储，管理和记住多个用户名和密码的负担，简化了用户登入和使用多个应用程序的过程。

        普通的cookie是不能被跨域传递的，这是浏览器出于安全原因所规定的。但SSO令牌的机制是基于OAuth2.0协议的，OAuth2.0是为了实现安全的授权机制而设计的。

        OAuth2.0协议通过授权服务器和资源服务器的分离，使得授权服务器可以单独处理用户的登录和授权，而资源服务器只需向授权服务器通过SSO方式获取访问API所需的令牌，而不需要拿到用户的用户名和密码等敏感信息。 

        微信  中间机制  
        当您在淘宝登录时，会向阿里巴巴集团的统一认证中心发出请求，认证中心会核对您的登录信息，并在认证通过后，生成并返回一个SSO令牌。该令牌被设置为浏览器的cookie，携带此cookie的浏览器，对于其他合法的阿里巴巴旗下的网站，可以跨域地自动发送令牌信息（可以通过跳转、iframe等方式实现）

        - 淘宝和天猫虽然是不同的域名，但它们都属于同一个公司
        在用户访问天猫时，天猫能够读取.taobao.com这个域名下的cookie，所以就能够识别用户的登录状态，从而完成用户的自动登录。 
            淘宝在设置cookie时，指定了cookie的"domain"属性。具体来说，"domain"属性可以指定当前cookie的作用域或者范围，这样就能让多个相关的网站共享用户信息。
            这意味着该cookie对于所有taobao.com域名下的网站都是可用的，包括天猫。所以，在用户访问天猫网站时，天猫的服务器就会读取.taobao.com这个域名下的cookie

- requestAnimationFrame和requestIdleCallback
    requestAnimationFrame 和 requestIdleCallback 是用于处理浏览器渲染事件的 API。

    requestAnimationFrame 会在浏览器下一次的重绘前执行指定的回调函数，每秒 60 次，它的运行时机属于浏览器的宏任务。
    animation 有demo
    requestIdleCallback 会在浏览器空闲时调用回调函数。如果存在多个回调函数，会依次执行，直到浏览器开始执行下一个宏任务。它的运行时机属于浏览器的微任务。

    当我们需要进行大量的计算或者持续的网络请求时，就会存在阻塞主线程的风险，从而导致页面性能下降或者不流畅。这时，我们可以利用 requestIdleCallback 来避免这种情况
    - 图像懒加载

    ```
    function lazyLoadImages() {
  // 获取所有需要进行懒加载的图片
  const images = document.querySelectorAll('img[data-src]');
  Array.from(images).forEach(image => {
    // 在浏览器空闲时进行图片加载
    requestIdleCallback(() => {
      image.src = image.dataset.src;
      image.removeAttribute('data-src');
    });
  });
}
    ```
    - 列表分页渲染
    function renderList(pageIndex, pageSize) {
  // 发送请求获取列表数据，由于是网络请求，可能会花费一定的时间
  fetch('/api/list?pageIndex=' + pageIndex + '&pageSize=' + pageSize)
    .then(response => {
      // 在浏览器空闲时进行渲染操作
      requestIdleCallback(() => {
        response.json().then(result => {
          // 渲染列表数据
          renderList(result.data);
        });
      });
    })
    .catch(error => {
      console.error(error);
    });
}
    - 虚拟DOM 树构建   requestIdleCallback  vue

        Vue 3 中使用了一个名为“静态提升（Static Hoisting）”的优化技术，它可以将那些在组件渲染过程中不会变化的部分提前生成、缓存起来，从而大大减少了每次渲染时的计算量。

        Vue 3 使用了一种类似“分片”的机制，将组件的静态部分和动态部分分开计算，并在动态数据变化时只更新动态部分，从而提升渲染性能。

两种合并所产生的log不一样。
    ![](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc805f0e1-272b-41af-aa26-77e17f250f4a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687262301&t=9586e97b0be0ae73e7b2395cf7e89947)
    ![](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F0c1f76f6-df7d-488f-a9d2-cdda2aa9915f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687262301&t=2ec7b28261d2675e37865b7db4db7896)
    ![](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F468a5e65-a95d-4a61-93b5-520cf51a546e%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687262301&t=e419550a9f148be2208c9d641b1d4f31)
- git merge 和 git rebase 都是用于合并分支的 Git 命令，两者有不同的应用场景和区别
    git merge 命令是将一个分支和另一个分支进行合并。例如，将 feature 分支合并到 master 分支：git merge feature，此时会将 feature 分支上的最新提交合并到 master 分支上。
    git rebase 命令的目的是合并来自另一个分支的修改，但它采用不同的合并策略。与 git merge 命令不同，它不会产生一个新的合并提交，而是将一系列提交复制到另一个分支上，重新应用一遍。例如，将 feature 分支基于 master 分支进行变基：git rebase master

    git merge 是基于两个分支的快照进行合并，在合并时会保留两个分支的所有修改记录，最后生成一个新的合并提交。这样一来，分支中的历史记录会变得比较混乱，但是可以很清楚地看到两个分支合并之后的结果。
    git rebase 是将一系列提交先取出来，按顺序依次应用到目标分支上。这样一来，会将所有的提交记录整理成一条直线，看上去会更加整洁。但是，如果合并出现冲突，每次解决冲突都需要手动修改代码，并重新进行提交，比较麻烦。

    git rebase 用于整理分支历史记录，合并后分支历史会比较简洁。

- git merge
    - 假设我们有两个分支：master 和 feature，我们在 feature 分支上开发了一些新功能，在完成开发后，我们需要将 feature 分支合并到 master 分支，这时可以使用 git merge 命令来实现：
        - 首先切换到 master 分支：git switch master
        - 执行 git merge 命令合并 feature 分支：git merge feature
        - 如果出现冲突，需要手动解决冲突。可以使用 git status 命令查看当前状态，解决完冲突后，使用 git add 命令将修改加入暂存区，然后执行 git merge --continue 命令继续合并。
        - 如果合并成功，则可以使用 git log 命令查看提交历史。
        git merge 命令用于将指定分支（通常是特性分支）合并到当前分支，如果出现冲突需要手动解决，合并成功后可以查看提交历史确认合并结果
- git rebase
    git rebase 命令用于将一个分支的修改基于另一个分支进行变基操作，可以适当简化历史记录。使用时需要注意冲突的解决，变基会修改 commit hash，所以不可对已经被 Push 的代码进行变基操作。如果还不熟悉Git的操作建议先备份代码，在安全测试过后再进行操作。

    假设我们有两个分支：master 和 feature，在分支 feature 上进行开发，此时 master 分支也有新的提交。并且我们需要将 feature 分支合并到 master 分支，可以使用 git rebase 命令来进行操作。

    - 首先切换到 feature 分支：git switch feature
    - 执行 git fetch 命令更新远程仓库的代码。
    - 执行 git rebase master 命令将 feature 分支的提交基于 master 分支进行变基，即将 feature 分支上的提交复制到 master 分支上的最新提交上。 
    - 可能会遇到冲突，此时需要手动解决冲突，然后执行 git add 命令将修改加入暂存区，最后执行 git rebase --continue 命令继续变基操作。
    - 如果没有冲突，则可以直接执行 git rebase --continue 命令完成变基操作。
    - 完成变基后，可以切换到 master 分支：git switch master
    - 合并 feature 分支：git merge feature。
