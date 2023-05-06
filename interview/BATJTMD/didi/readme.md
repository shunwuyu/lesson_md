[source](https://juejin.cn/post/7146151385707315213#heading-4)

- css布局方式
    - 流式布局（Flow Layout）：默认的布局方式，元素会按顺序从上到下，从左到右布局。当宽度超过容器宽度时会自动换行。
    - 浮动布局（Float Layout）：通过设置元素的浮动属性可以将元素移动到所在容器中的左侧或者右侧，实现多列布局等效果。
        - 实现三列布局, 中间的列宽度自适应, 高度自适应, 高度自适应（任意一列的高度最高时，其他两个列的高度也会自动扩展至相同高度）。
        1.html 圣杯   2.html 双飞翼
    - 弹性布局（Flexbox Layout）：通过设置容器的 display 属性为 flex 或 inline-flex，可以实现快速配置自适应、可变的布局。可以水平、垂直居中子元素、实现多列等效果。
        https://juejin.cn/post/6844904016439148551
    - 网格布局（Grid Layout）：通过将容器设置为网格布局，可以将页面划分成多个区域，实现比较复杂的布局。
        3.html
    - 绝对定位布局（Absolute Positioning）：通过设置元素的 position 属性为 absolute 或 fixed，在父级元素中的位置即使出现改变也可以保持不变。
    - 表格布局（Table Layout）：通过将元素设置 display 属性为 table、table-row、table-cell 等，模拟表格布局，实现水平居中、垂直居中等效果。可以设置表格的宽度、高度、边框、单元格宽度、间距等。
        4.html

- float离开文档流怎么做处理
    清浮动、高度塌陷
    原因  BFC  

    BFC 的原则主要包括以下几个方面：

BFC 的形成规则：
触发 BFC 的情况一般有：

根据 normal flow 布局规则，Block Box 会被分配一个垂直方向(box-direction)的 确切(defined) 或者计算值(computed)，而不是由其包含的内容来决定其高度；
Block Box 的 overflow 被设置为非 visible；
Block Container 的一个子元素的 float 被设置为 left 或者 right；
Block Container 的一个子元素的 position 被设置为 absolute 或者 fixed；
Block Box 是一个连续内联元素(line-bloxk)，并且 inline-box 的 white-space 被设置为 nowrap；
Block Box 是一个 fieldset，并且它的宽度被缩小了 shrink-to-fit；
BFC 布局规则：
内部 Box 会在垂直方向上一个接一个地放置；
Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠；
计算 BFC 高度时，浮动元素也参与计算；
BFC 区域不会与 float box 重叠；
text-align 的值不会影响 BFC 内部 Box 的水平对齐；
BFC 可以包含浮动的元素（清除浮动用）；
BFC 对其内部的元素产生的影响：
确保两个相邻的块级元素间不会出现外边距折叠；
可以包含浮动元素；
计算 BFC 时，浮动元素也会参与计算；
隔离 BFC 内部和外部的元素，使其互不影响；

- position属性，分别相对谁定位，具体使用场景

- 异步并行/串行
    ```js
     async() {
        await 异步事件1
        await 异步事件2
    }
    ```
    异步事件1、异步事件2是并行还是串行？怎么变为并行？
    异步事件1和异步事件2由于都使用了 await，所以是串行执行的，即异步事件2会在异步事件1运行完毕后才会开始执行。这是因为 await 会阻塞后面的代码的执行，直到被 await 的异步事件完成后才会继续执行。如果想让异步事件1和异步事件2并行执行，可以不使用 await，而是使用 Promise.all() 或者其他并行执行异步事件的方式。

- promose.all 和 promise.allSettled
    - 用法
    async ()=>{ 
        var result = await Promise.all([异步事件1,异步事件2]) 
        console.log(result[0],result[1])
    }
    
- 项目后端做了啥
    1. 项目后端是什么技术栈，使用了哪些后端技术
        node  在学校java  
        koa/mysql/中间件
    2. 项目后端实现了哪些业务逻辑
        用户管理  注册、登录、身份验证（JWT） 权限管理
        文件处理：文件上传、切片等
    3. resful  前后端分离的方式提供接口数据

- 跨域 jsonp缺点
    1. 只支持 GET 请求：JSONP 实际上以动态添加 <script> 标签请求跨域 JS 文件的方式来获得数据，因此只能够支持 GET 请求，使得使用时存在安全隐患。 (中间人)
    2. 安全问题，容易受到 XSS 攻击：JSONP 本质上是一段可执行的 JavaScript 代码，因此当被引用的 JS 为恶意代码时，会导致安全问题，容易受到 XSS 攻击。
    
- 跨域有哪些
    1. JSONP（JSON with Padding）：通过在页面中动态添加<script>标签的方式获取服务器返回的 JSON 数据，利用回调函数可携带获取的数据，缺点是只支持 GET 请求，容易受到 XSS 攻击，安全性一般。
    2. CORS（Cross-origin Resource Sharing）：在服务端设置响应头 Access-Control-Allow-Origin 来允许跨域请求，支持 GET、POST 等多种请求方式. 缺点是在服务端进行设置需要更改代码，增加服务端工作量。
    3. WebSocket：HTML5 中新增的协议，通过 socket 建立基于 TCP 的全双工通信，使用起来很方便，可以实现服务器端的即时推送，缺点是需要服务端支持，且浏览器兼容性不如其他方法。
    WebSocket 能够在不同的域之间进行跨域通信
        ky/socket
    4. postMessage：HTML5 中的一个 API，允许在不同域之间传递数据，支持双向通信，适用于一些 iframe 之间的交互场景
    5. 代理服务器：通过在同一域名下搭建一个代理服务器，用来转发不同域名请求，实现跨域请求，缺点是需要额外的服务器来实现代理服务。
        vite  proxy  
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
            }
        }
- nginx
    Nginx 是一款高性能的 Web 服务器和反向代理服务器
    不带端口
    ```
    server {
    listen 80;
        server_name www.example.com;
        location / {
            proxy_pass http://localhost:8000;
        }
    }
    ```
    2. 负载均衡：Nginx 还可以通过配置负载均衡实现请求的分流和负载均衡
    upstream backend {
    server backend1.example.com;
    server backend2.example.com;
}

server {
    listen 80;
    server_name www.example.com;
    location / {
        proxy_pass http://backend;
    }
}
    3. HTTPS：Nginx 还支持 HTTPS 协议，可以通过配置 SSL 证书和私钥来启用 HTTPS。

- 浏览器缓存
    主要针对的是前端静态资源(js css image)，大大的减少了请求的次数，提高了网站的性能(两端)
    - 强缓存 设置http响应头
        http1.0版本：Expires 具体时间点，客户端时间不准可能会导致误差
        http1.1版本：Cache-Control:max-age=xxx 时间偏移量 倒计时
    - 协商缓存
        Last-Modified 会经常更改的数据，不变则发送304。请求数量不变，请求体积减小
        设置响应头：Last-Modified 文件最近更改时间
        判断请求头：if-modified-since == Last-Modified 发送304
        etag
        根据文件生成哈希串
        设置响应体:Etag  1.1
        判断请求头：if-none-match == Etag 发送304
        - etag 优点
            精度更高：ETag 标识符是由服务器生成的字符串，并与实体关联。它可以在文件内容发生变化时被更新，因此在一定程度上能够更准确地检测出资源的变化。
            可以避免某些问题：使用 Last-Modified 机制时，有一些情况可能会导致错误。例如，当客户端与服务器之间的时间不同步时，可能导致一个已经被修改的文件因为客户端和服务器的时间不同步而无法被更新。
        - 缺点
            计算成本高： ETag 的生成需要计算哈希值，计算成本通常比 Last-Modified 更高。
            网络传输成本高： ETag 的标识符通常比 Last-Modified 的时间戳更长，因此传输花费更大。

- js 模块化 commonjs esmodule 区别
    CommonJS 和 ESModules 是 JavaScript 中不同的模块化规范
    CommonJS 是一种模块化规范，旨在解决浏览器端 JavaScript 不支持模块化开发的问题。它主要用于服务器端的 Node.js 环境，但在许多构建工具中也被广泛使用  require  module.exports 
    ESModules 是 ECMAScript 的模块化规范，从 ECMAScript 6 开始被引入到 JavaScript 中，旨在解决前端 JavaScript 的模块化问题，并且可以在浏览器原生支持
    import export

    ESModules 是更加现代，更具可靠性和可维护性的模块化规范，但 CommonJS 适用于许多场景下，且在一些构建工具及 Node.js 环境中仍然被广泛使用。
    - https://juejin.cn/post/7188173347199385656

    1. commonjs是动态导入, 可以在代码的任何地方引入
    ```
    const tag = true
    if (tag) {
        const mData = require('a.js')
        console.log(mData)
    }
    ```
    2. esModule模块是静态导入（在编译阶段进行导入）
    不能动态加载语句，所以import不能写在块级作用域和判断条件内
    ESM的import命令具有提升效果，会提升到整个模块的头部
    ```js
console.log(mData) // 这里依然可以输出值
import mData from 'a.js'
// 以上代码不会报错，因为import命令是编译阶段执行的，在代码运行之前
const tag = true
if (tag) {
  // 此处引入会报错
  // import mData from 'a.js'
  console.log(mData)
}
    3. 语法不同
    module.exports + require
    export default + import 
    4. commonjs导出的是一个module.exports, 导入其实就是给变量赋值


- 输入URL到页面呈现
    分别从网络，解析，渲染来说
    - 网络
        1. DNS 解析
            浏览器首先会将输入的 URL 解析成 IP 地址，这个过程就是 DNS 解析。浏览器会先在自己的缓存中查找对应的 IP 地址，如果没有找到则会向本地 DNS 服务器发起请求，如果本地 DNS 服务器也无法解析，则向域名的顶级 DNS 服务器发起请求，直到找到对应的 IP 地址。
            分布式数据库
        2. TCP 连接：浏览器通过找到的 IP 地址和端口号与目标服务器建立 TCP 连接，在这个过程中还包括了三次握手的过程，即 SYN、SYN/ACK、ACK。
        3. 发送 HTTP 请求：TCP 连接建立之后，浏览器会向服务器发送 HTTP 请求，请求中包含了一些请求头和请求体。
        4. 服务器处理请求并返回资源：服务器接收到 HTTP 请求之后，会根据请求的资源路径和请求方法，处理并返回相应的资源。这个过程中还可能会涉及到动态请求和数据库的访问等操作。
            url 解析  路径  匹配路由， 参数， 查询

    - 渲染
        1. HTML 解析：浏览器首先会进行 HTML 解析，将 HTML 文件解析成 DOM (文档对象模型) 树，将网页内容转化成 JavaScript 对象，在这个过程中也会进行标签的解析和处理。同时，CSS 和 JavaScript 等其他资源的加载也会在这个阶段开始。
        2. CSS 解析：浏览器进行 CSS 解析，会根据 CSS 规则将样式信息与 DOM 树绑定起来，产生带有样式信息的渲染树 (Rendering Tree)。
        3. 布局和绘制：浏览器进行页面布局 (Layout) 计算，计算出每个元素在屏幕上的确切位置与大小，最终将渲染树与布局信息进行合并得到一棵新的树，称为绘制树 (Painting Tree)。最后，浏览器利用绘制树将页面绘制到屏幕上，形成最终的用户界面。
         HTML 解析、CSS 解析、布局和绘制
    
    - 强调优化策略
        减少 HTTP 请求  图片懒加载
        压缩资源文件   webp
        使用 CDN    js css    减少服务器压力
        强调用户体验   骨架屏
        利用浏览器缓存   强  协商

- 实现一个 compose 函数
    ```
    function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

    ```

    function compose(...fn) {
  if (!fn.length) return (v) => v;
  if (fn.length === 1) return fn[0];
  return fn.reduce(
    (pre, cur) =>
      (...args) =>
        pre(cur(...args))
  );
}


- 发布订阅模式
    实现一个发布订阅模式拥有 on emit once off 方法

- get post 区别
    GET和POST是HTTP协议中的两种请求方法，用于向服务器提交数据和获取数据。主要区别在于
    1. 数据传输方式：GET请求通过URL传递参数，而POST请求通过HTTP消息体传递参数。
    2.     安全性：GET请求的参数在URL中直接可见，容易被拦截或窃听，因此不适合传递敏感信息；而POST请求的参数在HTTP消息体中，不会出现在URL中，相对安全。
    3. 缓存机制：GET请求可以被浏览器缓存，POST请求不能被缓存。这意味着，GET请求适合处理无副作用的请求（即不会更改服务器状态的请求），例如获取静态文件，而POST请求适合处理具有副作用的请求（即会更改服务器状态的请求），例如提交表单或进行支付。

    需要  安全性

- vite webpack 区别
    - 构建速度：Vite 比 Webpack 更快。Vite 利用浏览器原生 ES 模块加载能力，将代码拆分为更小的块，并启动一个 HTTP 服务来提供模块预构建，并将依赖关系推迟到请求时解析。这样可以提高构建速度。而 Webpack 对整个应用进行打包，并在文件改变时重新构建，构建时间较长
    - 开发体验：Vite 为开发提供了更好的体验。通过开启一个 HTTP 服务，它可以在浏览器中实时更新代码，不需要每次修改代码后重新构建整个应用程序。此外，Vite 还支持 HMR（热模块替换），允许在应用程序运行时替换模块，从而加速开发速度。而 Webpack 需要重新构建整个应用程序才能查看更改结果。
    - 配置：Vite 的配置相对简单。Vite 采用约定优于配置的原则，通过一小部分配置就可以完成绝大部分工作。而 Webpack 配置非常复杂，需要对各种 loader 和 plugin 进行配置



