[source](https://juejin.cn/post/7225816939041800252)

- leetcode 拖拽
    1. flex 左右会缩放
    2. 弹性布局

- 零钱兑换
    https://leetcode.cn/problems/coin-change/
    coin.js
    - 最值
        - 动态规划
            重叠子问题和最优子结构性质
            计算凑成目标金额所需的最少硬币数量时，我们可以将其拆分为多个子问题，并且每个子问题的最优解可以推导出更大规模问题的最优解。因此，可以使用动态规划来求解
        - 一位的， 所以用 dp[i] 

    - 为什么要创建一个amount + 1 的数组呢
        创建一个长度为 amount + 1 的数组是因为，我们需要计算从金额 0 到金额 amount 的所有情况。因此，我们需要一个长度为 amount + 1 的数组来记录每个金额所需要的最少硬币数量。

        例如，如果目标金额为 5 元，那么我们需要计算的金额分别是 0 元、1 元、2 元、3 元、4 元以及 5 元，则需要一个长度为 6（即 amount + 1）的数组来记录这些金额的最少硬币数量。因此，在算法中创建了一个长度为 amount + 1 的数组 dp，并将其初始化为 Infinity，表示当前金额不可能由给定的硬币面值组合而成。

        在算法的循环过程中，dp 数组会被逐步更新，直到计算出 dp[amount]，即凑成目标金额所需的最少硬币数量。
    - dp 公式
        凑出金额 i 所需的最少硬币数有两种可能：
        - 不使用第 j 个硬币，直接沿用之前的最优解，即为 dp[i]。
        - 使用第 j 个硬币，需要加上一枚 coins[j] 硬币，并且要凑出金额 (i - coins[j])，所需要的最少硬币数为 dp[i - coins[j]]。因此，使用第 j 个硬币后，凑出金额 i 最少需要 dp[i - coins[j]] + 1 枚硬币。
        Infinity  ->  dp[i] -> 最小的dp[i];

- 使用正则实现邮箱匹配
    /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-]{2,})+(.[a-zA-Z]{2,3})$/

    /^([a-zA-Z0-9_-])这段代码块表示开头首字母可以接受小写字母、大写字母、数字以及-和_两个字符
    @([a-zA-Z0-9_-]{2,})字符串需要符合@后面紧跟最少两个，小写字母、大写字母、数字以及-和_组成的字符串,比如@qq、@163
    (.[a-zA-Z]{2,3})$/最后，字符串需要匹配以.加上两个到三个的字符结尾，比如.com、.cn

- 浏览器从输入 URL 到页面展示的关键步骤
    - 用户在浏览器地址栏中输入 URL
    - 浏览器解析 URL 并提取出协议、主机名和端口号等信息
    - 浏览器向 DNS 服务器发送解析请求，并获得域名所对应的 IP 地址
        - DNS 解析的过程是什么，有哪些步骤？
            - 浏览器缓存：浏览器首先会检查本地缓存中是否已经存在该域名对应的 IP 地址，如果存在则直接返回该 IP 地址。

            - 系统缓存：如果浏览器中没有找到该域名对应的 IP 地址，则浏览器会向操作系统发起请求，在系统缓存中查找该域名对应的 IP 地址，如果系统缓存中有，则返回该 IP 地址。

            - 路由器缓存：如果系统缓存中没有找到该域名对应的 IP 地址，则浏览器会向路由器发起请求，在-路由器的缓存中查找该域名对应的 IP 地址，如果路由器缓存中有，则返回该 IP 地址。

            - DNS 服务器查询：如果以上缓存都没有找到该域名对应的 IP 地址，则浏览器会向本地 DNS 服务器发起请求，在本地 DNS 服务器的缓存中查找该域名对应的 IP 地址，如果本地 DNS 服务器缓存中有，则返回该 IP 地址。

            - 递归查询：如果以上所有缓存都没有找到该域名对应的 IP 地址，则本地 DNS 服务器会向根域名服务器发起请求，根域名服务器会返回该域名所对应的顶级域名服务器的地址。本地 DNS 服务器接着向顶级域名服务器发起请求，顶级域名服务器返回该域名所对应的权威域名服务器的地址。

            - 权威域名服务器查询：本地 DNS 服务器接着向权威域名服务器发起请求，权威域名服务器会返回该域名所对应的 IP 地址，本地 DNS 服务器将该 IP 地址缓存起来，并返回给浏览器。

            浏览器访问：浏览器拿到 IP 地址后，向该 IP 地址对应的 Web 服务器发起请求，获取页面资源并展示。

            根域名服务器、顶级域名服务器和权威域名服务器是 DNS 系统中不同层次的服务器。

            根域名服务器是 DNS 层次结构中最高层的服务器，它们存储和提供所有顶级域名服务器的地址。当本地 DNS 服务器无法解析一个域名时，就会向根域名服务器发送查询请求，以获得该域名对应的顶级域名服务器的地址。

            顶级域名服务器则负责管理特定顶级域名（如.com、.org、.net等）下的子域名。当本地 DNS 服务器知道要查询的域名所属的顶级域名时，它会向该顶级域名服务器发送查询请求，以获取该域名所对应的权威域名服务器的地址。

            权威域名服务器是最终响应 DNS 查询请求的服务器。当本地 DNS 服务器知道要查询的域名所对应的权威域名服务器地址后，它会向该权威域名服务器发送查询请求，以获取该域名所对应的 IP 地址或者其他资源记录。

            综上所述，根域名服务器提供顶级域名服务器的地址，顶级域名服务器提供权威域名服务器的地址，而权威域名服务器提供最终域名解析结果。这些服务器构成了 DNS 系统中的不同层次，协同工作以提供域名解析服务。

        - DNS 解析的时间影响网站性能，你知道如何缩短 DNS 解析时间吗
            - 使用 CDN 内容分发网络 可以将网站资源存放在离用户更近的服务器上
            - 增加 DNS 缓存时间：DNS 查询结果会被缓存在本地 DNS 服务器中，增加 DNS 缓存时间可以减少 DNS 解析的次数，缩短 DNS 解析时间。不过，如果网站的 IP 地址会经常变化，则需要适当控制缓存时间。
        - DNS 缓存的作用是什么？在浏览器和操作系统中 DNS 缓存有什么不同？
            在浏览器中，DNS 缓存通常会保存一段时间（如几分钟或几个小时），之后就会自动失效并需要重新查询。对于操作系统来说，DNS 缓存的持续时间可能会更长，并且可能会因为网络环境发生变化而失效。此外，某些操作系统还会实现自己的 DNS 缓存机制，以进一步提高性能并减少对 DNS 服务器的请求。
        - DNS 缓存需要定期失效，以确保缓存的信息始终与实际情况相符。因为在某些情况下，网站的 IP 地址可能会发生变化，或者 DNS 服务器本身可能会发生故障或更新。

            如果缓存不失效，那么当网站的 IP 地址发生变化时，本地计算机仍然会使用其缓存的旧信息，导致无法正确访问网站。同样地，当 DNS 服务器本身发生故障或更新时，缓存过期可以确保本地计算机获取到最新的可用 DNS 服务器地址。

            此外，DNS 缓存还需要进行周期性的刷新，以确保它们反映了最新的 DNS 解析结果。这可以帮助避免缓存污染和其他安全问题。

    - 浏览器通过 IP 地址与 Web 服务器建立 TCP 连接
    - 浏览器向 Web 服务器发送 HTTP 请求
    - Web 服务器处理 HTTP 请求并返回响应数据
    - 浏览器接收到响应数据并进行解析
    - 浏览器渲染 HTML 页面，并根据 HTML 标记请求加载页面所需的其他资源（如 CSS、JavaScript 文件等）
    - 浏览器执行 JavaScript 脚本，处理页面事件
    - 页面加载完成，用户可以进行交互操作。

- 浏览器多进程架构
    1. 浏览器进程（Browser Process）：该进程是整个浏览器的主进程，负责协调、控制其他所有子进程的运行，也负责管理用户界面、地址栏、书签栏和扩展程序等。
    2. 渲染进程（Renderer Process）：每一个标签页都会对应一个渲染进程，用于渲染和处理网页内容，同时还能够执行JavaScript脚本、处理DOM事件
    3. GPU进程（GPU Process）：该进程通过硬件加速技术来提高浏览器的图形性能，并为渲染进程提供支持。
    4. 网络进程（Network Process）：该进程负责处理网络请求和响应，包括DNS解析、TCP连接和HTTP协议等。
    5. 插件进程（Plugin Process）：如果网页需要使用插件（如Flash插件），则会创建一个独立的插件进程来运行插件代码。
    6. 扩展程序进程（Extension Process）：如果用户安装了扩展程序，那么每个扩展程序都会在一个单独的进程中运行，以提高浏览器的稳定性和安全性。
    

- dom 树怎么生成的
    浏览器是多进程架构，而其中有一个渲染进程，负责页面的渲染和js脚本的执行，而在渲染进程中有一个HTML解析器，还有一个网络进程，网络进程负责根据content-type创建渲染进程，然后渲染进程用类似stream流管道那种接字节流将它解析为dom

    - 词法分析
        浏览器 加载 HTML 文件 解析 文件中的字符流 构建 出 一个 初始 的 文档节点 document node 并作为 根节点
        分析 HTML 文件的标签 属性等信息 创建 相应 的 元素节点 element node 并加入 到 DOM 树 中
        分析 HTML 文件中的文本内容 创建 文本节点 text node 并加入 到 DOM 树 中
        如果 存在 JavaScript 代码或 CSS 样式表 浏览器 会执行 这些 脚本 或者 样式表 可能导致 DOM 树的修改和重构
        最终 生成 的 DOM 树 可以通过 JavaScript 代码 进行访问和操作 从而实现 对 文档结构 和 内容 的控制和改变
    - 语法分析则是指在解析HTML文档时，
        浏览器会对HTML文本进行逐字扫描，通过词法分析和语法分析将其转换成抽象语法树（AST）。语法分析主要工作是识别文档中的标签、属性、字符实体等特殊符号，将它们转换成浏览器能够理解并处理的数据结构。
    - generator
        生成 DOM 树的 JavaScript 代码

- BFC
    Block Formatting Context  块级格式化上下文
    指一个独立的渲染区域，规定了内部块级元素的布局方式，使得它们不受外部元素的影响
    BFC 是实现一些复杂布局的重要工具，常用于清除浮动、防止 margin 合并等场景。

    怎么触发BFC
        html 最大的BFC 
        浮动
        position 不为static
        flex
        overflow 为  auto  scroll hidden

    - BFC 可以清除浮动的原因
        在普通的布局中，浮动元素可能会导致父元素高度塌陷(离开文档流)
        BFC 可以解决浮动元素引起的父元素高度塌陷问题，实现“清除浮动”的效果
            准确的说不是清除，是因为浮动元素也是BFC，两个BFC互不影响
        也可以通过在伪元素上设置 clear:both 来清除浮动，因为伪元素默认具有 BFC 特性

        伪元素本身并不是 BFC，但是它可以具有 BFC 的特性。在 CSS 规范中，对于伪元素，其生成的盒子被视为一个独立的元素，并且与其他元素一样会被包含在父元素中。

        由于每个元素都可以构成一个 BFC，因此伪元素生成的盒子也可以构成 BFC。具体来说，在伪元素上触发 BFC 可以使用与普通元素相同的方式，比如设置 overflow: hidden、float 和 position 等属性。
    - 居中
        flex布局 align-items  justify-content
        grid  display:grid和place-items:center;
        定位 position: absolute; top: 50%;left: 50%;transform: translate(-50%, -50%);
        表格布局   display:table和display:table-cell   vertical-align: middle；text-align: center;
        文字居中法  text-align: center; line-height: 200px;
        calc   position: absolute;top: calc(50% - 25px);left: calc(50% - 50px);
        margin 负值  position: absolute;top: 50%;left: 50%;margin-top: -25px; /* 垂直居中，需将元素高度的一半作为margin-top的值 */margin-left: -50px;

    - 层叠上下文
        层叠上下文（stacking context）是CSS中一个很重要的概念，它是指在HTML文档中，元素的层叠顺序和显示顺序并不完全一致，而是由元素的层叠上下文决定的。
        每个层叠上下文都有自己的层叠顺序，可以包含多个子元素，这些子元素会按照各自的层叠顺序进行显示。当两个或多个层叠上下文重叠时，就会形成整个页面的层叠顺序，决定哪些元素显示在前面，哪些元素被覆盖。
        层叠上下文可以通过一些CSS属性来创建，比如z-index、opacity、transform等。例如，设置一个元素的z-index属性值为正数，就可以将其放置于当前层叠上下文的顶部，从而覆盖其他同级元素
        层叠上下文可以通过一些CSS属性来创建，比如z-index、opacity、transform等

        stacking-demo
        首先，z-index属性值并不是在任何元素上都有效果。它仅在定位元素（定义了position属性，且属性值为非static值的元素）上有效果。
        判断元素在Z轴上的堆叠顺序，不仅仅是直接比较两个元素的z-index值的大小，这个堆叠顺序实际由元素的层叠上下文、层叠等级共同决定。

- https://github.com/shengxinjing/upload/blob/master/src/main.js

- CSS 当中以 @ 开头的属性有哪些
   @import：引入其他 CSS 文件。
    @media：根据不同屏幕尺寸应用不同的样式。
    @font-face：定义自己的字体库。
    @keyframes：定义 CSS 动画的关键帧。

    @import 要注意什么？
    当浏览器解析到 @import 语句时，它会立即暂停当前文件的加载，并开始加载被引用的外部 CSS 文件。这个过程是串行的，也就是说，每个外部文件必须在前一个外部文件加载完成后才能开始加载。
- 假如让你设计一个适配 PC、手机和平板的项目，你有哪些布局方案
    - 首先是vh、vw
    - 淘宝lib-flexible
    - script 阻塞  动态rem 