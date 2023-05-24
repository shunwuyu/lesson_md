[source](https://juejin.cn/post/7225803154553684025)

- 说一些常见的HTTP请求头
    - User-Agent
        客户端的类型，例如浏览器和操作系统
        Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1

        Mozilla/5.0：指明客户端使用的浏览器引擎，这里表明使用的是 Mozilla 的引擎。

        (iPhone; CPU iPhone OS 15_0 like Mac OS X)：指明客户端的设备类型和操作系统信息。这里表明使用的是 iPhone 设备，并且运行的是 iOS 15.0 操作系统，类似于 Mac OS X 系统。

        AppleWebKit/605.1.15：指明客户端使用的渲染引擎，这里使用的是 WebKit 渲染引擎，版本号为 605.1.15。

        (KHTML, like Gecko)：指明客户端的兼容性，这里表明客户端支持 KHTML 解析器，类似于 Gecko。

        Version/15.0：指明客户端的版本号，这里表明客户端的版本号为 15.0。

        Mobile/15E148：指明客户端的应用程序类型，这里表明客户端是移动端的 Safari 浏览器，并且版本号为 15E148。

        Safari/604.1：指明客户端使用的具体浏览器型号，这里表明客户端使用的是 Safari 浏览器，版本号为 604.1。

    - 浏览器引擎 和 渲染引擎 有什么区别
        浏览器引擎（Browser Engine）通常由两部分组成：

用户界面（User Interface）：负责显示网页内容，包括地址栏、前进/后退按钮、书签等。

渲染引擎（Rendering Engine）：负责解析 HTML/CSS 等标记语言，并将其转化为可视化的网页形式。

而渲染引擎则是浏览器引擎的一个重要组成部分，它被用于将网页的源代码转变为人们可以看到和交互的页面。渲染引擎最常用的有以下几种：

WebKit：Safari 和 Chrome 使用的渲染引擎，也是移动端 Safari 和 Android 浏览器使用的渲染引擎。

Blink：Chrome 浏览器基于 Webkit 引擎进行了修改优化，取名叫 Blink。

Gecko：Mozilla Firefox 使用的渲染引擎。

Trident：Microsoft Internet Explorer 使用的渲染引擎。

因此，浏览器引擎一般包括用户界面和渲染引擎；而渲染引擎则是处理网页呈现的关键组件，它负责将 HTML/CSS/JS 转换成可视化的网页形式，以供用户浏览并与之交互。

- webkit 包含js 解析吗
    JavaScriptCore 引擎实现了 ECMAScript 标准，支持 JavaScript 语言的所有特性，包括对象、函数、闭包、原型链等。同时，它也提供了一些额外的功能，如 JIT（Just-In-Time）编译器、垃圾回收机制等，以优化 JavaScript 代码的执行效率。

- JIT ? 
    Just-In-Time）是一种动态编译技术  将字节码即时编译为本地机器代码以提高程序运行效率。
    string code -> ast -> JIT 字节码  -> 机器码
    与静态编译相比，JIT 可以减少程序启动时间和内存消耗
    - 缓存：将已经编译完成的代码缓存起来，下次执行时直接使用，避免重复编译
    - 热点探测：对程序进行动态分析，确定最常执行的代码段或者语句，并优先对其进行编译
    - 内联函数：将一些简短的函数直接嵌入到调用它们的地方，避免了函数调用的开销
    - 延迟编译：当一个函数第一次调用时不立即编译，而是等到多次调用后再统一编译，减少编译次数
    - 代码生成优化：针对不同的硬件平台和架构，采用不同的代码生成策略，以达到更好的性能表现

- 垃圾回收策略
    引用计数（Reference Counting）：记录每个对象被引用的次数，当引用计数为 0 时就释放该对象。这种方式比较简单，但是难以处理循环引用（Reference Cycle）的情况。

标记-清除（Mark and Sweep）：标记所有可达的对象，然后清除所有未被标记的对象。这种方式能够处理循环引用，但是会产生碎片和暂停时间长等问题。

- 手写reduce

    Array.prototype.myReduce = function(callback, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    throw TypeError('Reduce of empty array with no initial value');
  }
  
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  
  return accumulator;
}

- 宏任务
    setTimeout 和 setInterval：设置定时器，等待一定的时间后执行回调函数。

    DOM 事件：如 click、load、scroll 等事件的回调函数会被加入到宏任务队列中等待执行。

    AJAX 异步请求的回调函数。

    requestAnimationFrame：用于在下一次浏览器重绘之前执行动画效果或其他操作。

    脚本的异步加载：通过 script 标签加载 JavaScript 文件时，可以设置 async 或 defer 属性，使得脚本的加载和执行不会阻塞页面渲染。
        async 和 defer 都是用于异步加载 JavaScript 脚本文件的属性，它们的主要区别在于：

        加载顺序：async 属性会异步加载脚本，并且不会保证脚本的执行顺序。也就是说，多个 async 脚本的加载和执行顺序是不确定的。而 defer 属性也会异步加载脚本，但是会按照文档中出现的顺序依次执行，即后加载的脚本会等待 DOM 解析完毕后才执行。

        执行时机：async 脚本会在下载完成后立即执行，而不管 HTML 文档是否解析完毕。这会导致 async 脚本可能在 DOM 准备好之前执行，因此需要注意脚本的顺序和执行时机。defer 脚本则会在 HTML 文档解析完成后、DOMContentLoaded 事件触发前执行，这样可以避免阻塞页面渲染和交互。

        总之，async 和 defer 属性都可以用于异步加载脚本，但是它们的加载顺序和执行时机略有不同，开发者需要根据实际情况选择合适的方式来优化代码。\\

    页面生命周期的回调函数：如 window.onload、window.onunload 等事件的回调函数会被加入到宏任务队列中等待执行。

    - setImmediate
        setImmediate.js

    微任务
        Promise 的 then 方法
        MutationObserver 回调函数
            是一个 Web API，用于监听 DOM 树的变化并在相应事件发生时执行回调函数。它的作用包括：
                MutationObserver_demo  虚拟长列表  vue/all/longlist
                - 监听 DOM 变化：通过 MutationObserver 可以监听 DOM 的增删改等操作，并在变化发生时执行回调函数。
                - 动态更新页面：当需要动态插入或删除 DOM 元素、更新元素属性时，可以使用 MutationObserver 来监听这些操作，从而实现页面的实时更新
                - 提高性能和响应速度：使用 MutationObserver 可以避免频繁地查询 DOM 状态，从而提高程序的性能和响应速度。相比 setInterval 和 setTimeout 等定时器方式，MutationObserver 会更加精准和高效。
                - 
        
        process.nextTick
            当我们需要在当前事件循环的下一个迭代中执行一些操作时，可以使用 process.nextTick()
            nextTick.js

        queueMicrotask
    - 所有的task 图
        task.png
        requestIdleCallback 是一个特殊的异步函数，它会在浏览器空闲时执行回调函数。它不是微任务也不是宏任务，而是一种独立的任务类型。

        当调用 requestIdleCallback() 时，浏览器会安排回调函数在没有其他工作要做时运行，例如在用户正在滚动页面、执行动画或处理输入事件时。这意味着 requestIdleCallback() 的回调函数可能会在几毫秒到几秒之间的任何时间运行，具体取决于浏览器的工作负载和性能。

    - setImmediate 和 nextTick 之间的区别
        执行顺序	在下一个事件循环中执行，位于 I/O 操作后面	在当前事件循环末尾执行，位于 I/O 操作前面
        执行优先级	低于 process.nextTick()，高于 setTimeout	高于 setImmediate 和 setTimeout
        I/O 能力	可以访问 I/O 操作	不可以访问 I/O 操作

        nextTick2.js

-  买卖股票的最佳时机 leetcode 121
    给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

    你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

    返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0

    本题采用贪心算法，遍历整个数组，每次记录历史最低价和当前价格与历史最低价之差的最大值即可。
    ```
    function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            let profit = price - minPrice; // 算出当天售出的最大利润
            if (profit > maxProfit) {
                maxProfit = profit; // 更新更大的利润
            }
        }
    }

    return maxProfit;
}
    ```
    贪心算法是一种解决优化问题的算法，每次选择局部最优解并逐步构建全局最优解。
    关键点包括：确定问题的最优子结构、构建贪心选择和证明贪心选择的正确性
    profit.js
    动态规划   最有子结构 + 状态转移方程
    
