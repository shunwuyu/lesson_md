- http 无状态
    - 它的每个请求都是完全独立的，每个请求包含了处理这个请求所需的完整的数据，发送请求不涉及到状态变更。
    - 原因
        最初的 http 协议只是用来浏览静态文件的，无状态协议已经足够，这样实现的负担也很轻
        实现有状态的代价是很高的，要维护状态，根据状态来操作
    - 优点是比有状态的协议更简单  
        HTTP/1.1 上，同一个连接允许传输多个 HTTP 请求的情况下，如果第一个请求出错了，后面的请求一般也能够继续处理
    -  HTTP 这样的无状态协议，使用元数据（如 Cookies 头）来维护会话，使得会话与连接本身独立起来，这样即使连接断开了，会话状态也不会受到严重伤害，保持会话也不需要保持连接本身（链接和会话独立）
    - HTTP 1.x 是无状态的协议
        HTTP/2，它应该算是一个有状态的协议了（有握手和 GOAWAY 消息
    - 如何解决无状态问题
        服务器无法给不同的客户端响应不同的信息。 购物车业务， 用户系统
        1. Cookie 4步
            Client 发送 HTTP 请求给 Server
            Server 响应，并附带 Set-Cookie 的头部信息
            Client 保存 Cookie，之后请求 Server 会附带 Cookie 的头部信息
            Server 从 Cookie 知道 Client 是谁了，返回相应的响应
            Server 拿到 Cookie 后面，通过什么信息才能判断是哪个 Client 呢？服务器的 SessionID。
        2. Session
            如果把用户名、密码等重要隐私都存到客户端的 Cookie 中，还是有泄密风险。为了更安全，把机密信息保存到服务器上，这就是 Session。Session 是服务器上维护的客户档案，可以理解为服务器端数据库中有一张 user 表，里面存放了客户端的用户信息。SessionID 就是这张表的主键 ID。

            Session 信息存到服务器，必然占用内存。用户多了以后，开销必然增大。为了提高效率，需要做分布式，做负载均衡。因为认证的信息保存在内存中，用户访问哪台服务器，下次还得访问相同这台服务器才能拿到授权信息，这就限制了负载均衡的能力。而且 SeesionID 存在 Cookie，还是有暴露的风险，比如 CSRF(Cross-Site Request Forgery，跨站请求伪造)。
        3. Token
            首先，Token 不需要再存储用户信息，节约了内存。其次，由于不存储信息，客户端访问不同的服务器也能进行鉴权，增强了扩展能力。然后，Token 可以采用不同的加密方式进行签名，提高了安全性。
            Token 就是一段字符串，Token 传递的过程跟 Cookie 类似，只是传递对象变成了 Token。用户使用用户名、密码请求服务器后，服务器就生成 Token，在响应中返给客户端，客户端再次请求时附带上 Token，服务器就用这个 Token 进行认证鉴权。
            Token 虽然很好的解决了 Session 的问题，但仍然不够完美。服务器在认证 Token 的时候，仍然需要去数据库查询认证信息做校验。为了不查库，直接认证，JWT 出现了。
        4.  JWT
            JWT 的英文全称是 JSON Web Token。JWT 把所有信息都存在自己身上了，包括用户名密码、加密信息等，且以 JSON 对象存储的。
            JWT 长相是 xxxxx.yyyyy.zzzzz
            {  "sub": "1234567890",  "name": "John Doe",  "admin": true}
            签名，把 header 和 payload 用 base64 编码后"."拼接，加盐 secret(服务器私钥)。
            eyJhbGciOiJIUzI1NiJ9  .eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ  .yKOB4jkGWu7twu8Ts9zju01E10_CPedLJkoJFCan5J4;
            给 Token 穿个外套
            Authorization: Bearer;
            这就是我们在请求 Header 里面看到的内容格式了
        
- let const 使用场景
    对于需要写保护的变量则使用const,只有确实需要改变变量的值时,则使用let,因为大部分变量的值在初始化后不应该在改变,而预料外的变量的值的改变会产生很多Bug

    如果希望在全局对象下定义变量,可以使用var

    块级作用域绑定的let,const为javaScript引入了词法作用域,使用它们声明变量不会提升,而且只可以在声明这些变量的代码块种使用\

    使用let,const也能够节省内存空间,不会造成全局变量的污染,必须的得前置声明赋值,然后才能使用(暂存性死区)\

- 伪类选择器
    CSS3中添加了许多了伪类选择器， 代替了不少JS的工作，让我们从以前通过获取DOM节点进而进行样式修改的操作，变得更加便捷高效。

    - :first-child / :last-child
    - :first-of-type / :last-of-type
    - :nth-child(n) / :nth-last-child(n)
    - :root 定义变量
    - :empty

- BEM 命名规范
    Block(块）  Element（元素）  Modifier(修饰符）
    weui   .weui-cell.weui-cell_access>.weui-cell__hd+.weui-cell__bd+.weui-cell__ft
    将用户界面分为独立的块,即使复杂的UI，这也使界面开发变得容易和快速，并且允许重用现有代码而无需复制和粘贴。
    - 避免样式冲突
    - 减小名称长度
    - 提高可阅读性
    - 增加样式重用

- css 预处理器less  sass 实现
    主要用 stylus   react 中也是用过styled-components 
    1. 变量
        主题， 便于维护
    2. minxin
        复用代码 比如 1px border  清楚浮动 适配背景
    3. 嵌套
        缩进代表模块化
    工程化  使用css-loader style-loader 等加载 stylus 等编译

- 为什么使用style-component, 有什么好处？
    之前 css 和 js 分离，  css 模块化   
    <div class="red-button"></div>
    找到CSS的文件，然后在文件中搜.red-button  
    烦人的绑定过程消失  标签+样式组合

    - CSS模块化
        尽量降低模块之间的耦合度，利于项目的进一步维护
    - 支持预处理器嵌套语法
    - 让CSS代码能够处理逻辑
        <RecommendItem imgUrl={'xxx'}/>
        export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

    - 语义化
        ```
        <HeaderWrapper>
    <Logo/>
    <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
    	</NavItem>
        <SearchWrapper>
            <NavSearch></NavSearch>
            <i className='iconfont'>&#xe614;</i>
        </SearchWrapper>
    </Nav>
    <Addition>
        <Button className='writting'>
    	  <i className="iconfont">&#xe615;</i>
    	  来参加
    	</Button>
    	<Button className='reg'>注册</Button>
    </Addition>
</HeaderWrapper>
        ```
- axios 封装过程
    https://juejin.cn/post/7124573626161954823#heading-19

    只要是写过生产环境前端代码的人， 应该都脱离不了异步接口请求
    那么 接口请求 的 封装 是必经之路。

    ```
    axios.post(`/api/xxxx/xxxx?xxx=${xxx}`, { ...data })
.then((result) => {
    if (result.errno) {
        ....
    } else {
        ....
    }
})
.catch((err) => {
    ....
})
    ```
    数十上百 行重复代码
    随着请求的体量越来越大，我们的项目便越来越难以维护

    const [e, r] = await api.getUserInfo(userid)
    if (!e && r) this.userInfo = r.data.userinfo
    最终的实现效果

    - 基础请求流程
    - 拦截器
    

- baseURL 实现
    const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
    })


- rem元素使用场景， 如何动态设置html元素字体大小


- - git
    git push origin master 解释
        相等于 git push origin master:master
        上面命令将本地的master分支推送到origin主机，  -u 同时指定origin为默认主机
        1、master是主分支，还可以建一些其他的分支用于开发。
    git 如何同步？
        1. git remote add origin 
            添加远程仓库
        2. git add
            git commit -m ''
            git push origin master
        git checkout 可以实现哪些功能？
            1. 切换分支
                git checkout 分支名
            2. 创建并切换到新分支
                git checkout  -b 分支名
            3. 撤销对文件的修改
                git checkout 文件名
    合并其中一个feature分支有哪几种实现方式
        第一种
        git pull origin feature
        第二种
        git merge feature
    git pull和git fetch的区别
        他们的功能是大致相同的，都是起到了更新代码的作用
        pull=fetch+merge
        pull的话，下拉远程分支并与本地分支合并。 fetch只是下拉远程分支，怎么合并，可以自己再做选择。

- hooks 性能优化
    ```
    const [count, setCount] = useState(0);
    const userInfo = {
        // ...
        age: count,
        name: 'Jace'
    }
    return <UserCard userInfo={userInfo}>
    ```
    ```
    const [count, setCount] = useState(0);

const userInfo = useMemo(() => {
  return {
    // ...
    name: "Jace",
    age: count
  };
}, [count]);

return <UserCard userInfo={userInfo}>
    ```
    很明显的上面的 userInfo 每次都将是一个新的对象，无论 count 发生改变没，都会导致 UserCard 重新渲染，而下面的则会在 count 改变后才会返回新的对象。
    ```
    const num = useMemo(() => {
    let num = 0;
    // 这里使用 count 针对 num 做一些很复杂的计算，当 count 没改变的时候，组件重新渲染就会直接返回之前缓存的值。
    return num;
    }, [count]);

    return <div>{num}</div>

    ```
   https://codesandbox.io/s/usecallback1-yu1sp?file=/src/App.js
    React.memo 这个方法，此方法内会对 props 做一个浅层比较，如果如果 props 没有发生改变，则不会重新渲染此组件

- 协商缓存
    主要涉及到两组header字段
    Etag和If-None-Match
    校验码  ETag可以保证每一个资源是唯一的，资源变化都会导致ETag变化
    服务器根据浏览器上送的If-None-Match值来判断是否命中缓存。 当服务器返回304 Not Modified的响应时
    由于ETag重新生成过，response header中还会把这个ETag返回，即使这个ETag跟之前的没有变化。

    Last-Modified和if-modified-since  
    浏览器第一次请求一个资源的时候，服务器返回的header中会加上Last-Modify，Last-Modify是一个时间标识该资源的最后修改时间，例如Last-Modify: Thu,31 Dec 2037 23:59:59 GMT
    当浏览器再次请求该资源时，request的请求头中会包含 if-modified-since，该值为缓存之前返回的Last-Modify。服务器收到if-modified-since后，根据资源的最后修改时间判断是否命中缓存。
    如果命中缓存，则返回304，并且不会返回资源内容，并且不会返回Last-Modify。
    5.js

- 如何解决页面缓存问题？
    1. 浏览器的缓存机制其实是一个很好的优化机制，可以避免重复请求相同的资源，减轻服务器的压力，也可以加快用户的二次读取。
    2. 缓存的存在会导致css，js或者其他静态资源不能及时更新
    3. 有时修改了html，html一般不会读取缓存，但css和js读取了缓存，就会出现一些莫名其妙的问题，而到了用户那边，则会一脸懵逼

    - 浏览器的缓存原理
        - 分为强制缓存和协商缓存
        - 当二次打开网页时，浏览器会先对缓存发起http请求，只要请求的资源存在缓存并且该资源的请求头expires和cache-control中存在缓存的标志，那就默认读取缓存，如果缓存失效但缓存依然存在，这时有会对服务器发出http请求，通过last-modified和etag两个请求头验证是否存在协商缓存，存在协商缓存就让浏览器照样读取缓存。
        - 如果你资源已经不存在了或者明确禁止缓存，那浏览器也不可能使用缓存，这也是解决缓存问题的办法
            修改 html 里 图片的名字
            index.123423.js 添加MD5  hash   index.js?a=1231212 js、css加上版本号
            ctrl + f5 
            浏览器清楚访问记录
            meta缓存头设置为禁止缓存
            <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
            <meta http-equiv="Pragma" content="no-cache" />
            <meta http-equiv="Expires" content="0" />
            Cache-Control作用于HTTP1.1 Pragma作用于HTTP1.0 Expires作用于proxies

        ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/19/16d451bdbab2c0ab~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

        - 强制缓存
            1. 两个请求头，expires和cache-control
                expires不怎么用，是http1.0提出的一个表示资源过期时间的header
                cache-control出现于 HTTP / 1.1，优先级高于 Expires，同样也可以表示资源过期时间
                - 有很多值
                    public：所有内容都将被缓存
                        public以指定响应可由客户端和共享（代理）缓存缓存
                    private：所有内容只有客户端可以缓存，Cache-Control的默认取值
                    no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
                    no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
                    max-age=xxx (xxx is numeric)：缓存内容将在xxx秒后失效


                强制缓存是否生效，可以查看控制台的network选项，下面的size属性，一般就是from memory cache或者from disk cache

- 前后端如何实现分离
    - 前端
        页面的展示、交互灵活、炫丽，响应快速，适配设备
    - 后端
        高并发、高可用、高性能、高扩展
    前后端分离 各自专注于自己擅长的领域深耕细作
    - 如何分离
        1. 后端为主的MVC时代
        ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6763e7881f34428bb025e0594dcdd23a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)
        2. 基于 Ajax 带来的 SPA 时代
        ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/50c5e1a429f84d6bac4994a131425143~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)
        接口文档 前后端接口的约定
        3. 前端MVVM

    - 如何分离？
        1. 职责分离
            前后端仅仅通过异步接口(AJAX/JSONP)来编程；
        2. 前后端都各自有自己的开发流程，构建工具，测试集合；
        3. 关注点分离，前后端变得相对独立并松耦合；
            后端
            提供数据 处理业务逻辑  MVC 代码跑在服务器
            前端
            接受返回数据， 处理渲染逻辑  MVVM  浏览器

    - 开发流程
        - 后端编写和维护接口文档，在 API 变化时更新接口文档；
        - 后端根据接口文档进行接口开发；
        - 前端根据接口文档进行开发 + Mock平台；
        - 开发完成后联调和提交测试；

- 性能优化
    https://juejin.cn/post/6892994632968306702
    1. 减少 HTTP 请求
        base64  雪碧图  懒加载  缓存  
    2. 使用 HTTP2
        服务器解析 HTTP1.1 的请求时，必须不断地读入字节，直到遇到分隔符 CRLF 为止。而解析 HTTP2 的请求就不用这么麻烦，因为 HTTP2 是基于帧的协议，每个帧都有表示帧长度的字段
        ## 解析速度快
        HTTP1.1 如果要同时发起多个请求，就得建立多个 TCP 连接，因为一个 TCP 连接同时只能处理一个 HTTP1.1 的请求。
        ## 多路复用
        在 HTTP2 上，多个请求可以共用一个 TCP 连接，这称为多路复用。同一个请求和响应用一个流来表示，并有唯一的流 ID 来标识。
        多个请求和响应在 TCP 连接中可以乱序发送，到达目的地后再通过流 ID 重新组建。

    3.  静态资源使用 CDN
        内容分发网络（CDN）是一组分布在多个不同地理位置的 Web 服务器。我们都知道，当服务器离用户越远时，延迟越高。CDN 就是为了解决这一问题，在多个位置部署服务器，让用户离服务器更近，从而缩短请求时间。

        - 浏览器要将域名解析为 IP 地址，所以需要向本地 DNS 发出请求。
        - 本地 DNS 依次向根服务器、顶级域名服务器、权限服务器发出请求，得到网站服务器的 IP 地址。
        - 本地 DNS 将 IP 地址发回给浏览器，浏览器向网站服务器 IP 地址发出请求并得到资源。

        浏览器要将域名解析为 IP 地址，所以需要向本地 DNS 发出请求。
本地 DNS 依次向根服务器、顶级域名服务器、权限服务器发出请求，得到全局负载均衡系统（GSLB）的 IP 地址。
本地 DNS 再向 GSLB 发出请求，GSLB 的主要功能是根据本地 DNS 的 IP 地址判断用户的位置，筛选出距离用户较近的本地负载均衡系统（SLB），并将该 SLB 的 IP 地址作为结果返回给本地 DNS。
本地 DNS 将 SLB 的 IP 地址发回给浏览器，浏览器向 SLB 发出请求。
SLB 根据浏览器请求的资源和地址，选出最优的缓存服务器发回给浏览器。
浏览器再根据 SLB 发回的地址重定向到缓存服务器。
如果缓存服务器有浏览器需要的资源，就将资源发回给浏览器。如果没有，就向源服务器请求资源，再发给浏览器并缓存在本地。

4.  将 CSS 放在文件头部，JavaScript 文件放在底部
    CSS 执行会阻塞渲染，阻止 JS 执行
    JS 加载和执行会阻塞 HTML 解析，阻止 CSSOM 构建

    如果这些 CSS、JS 标签放在 HEAD 标签里，并且需要加载和解析很久的话，那么页面就空白了。所以 JS 文件要放在底部（不阻止 DOM 解析，但会阻塞渲染），等 HTML 解析完了再加载 JS 文件，尽早向用户呈现页面的内容。
那为什么 CSS 文件还要放在头部呢？
因为先加载 HTML 再加载 CSS，会让用户第一时间看到的页面是没有样式的、“丑陋”的，为了避免这种情况发生，就要将 CSS 文件放在头部了。
另外，JS 文件也不是不可以放在头部，只要给 script 标签加上 defer 属性就可以了，异步下载，延迟执行。

    - 使用字体图标 iconfont 代替图片图标
        还有一个优点是生成的文件特别小。 设置属性，例如 font-size、color 等等，非常方便   少http
- 善用缓存，不重复加载相同的资源
- 压缩文件
    得益于 webpack 和 node 的发展，现在压缩文件已经非常方便了。
    JavaScript：UglifyPlugin
    CSS ：MiniCssExtractPlugin
    使用 gzip 压缩。可以通过向 HTTP 请求头中的 Accept-Encoding 头添加 gzip 标识来开启这一功
- 图片优化
    - 图片延迟加载
        先不给图片设置路径，只有当图片出现在浏览器的可视区域时，才去加载真正的图片，这就是延迟加载。对于图片很多的网站来说，一次性加载全部图片，会对用户体验造成很大的影响，所以需要使用图片延迟加载。
        <img data-src="https://avatars0.githubusercontent.com/u/22117876?s=460&u=7bd8f32788df6988833da6bd155c3cfbebc68006&v=4">
        const img = document.querySelector('img')
        img.src = img.dataset.src
    - 响应式图片
        <picture>
            <source srcset="banner_w1000.jpg" media="(min-width: 801px)">
            <source srcset="banner_w800.jpg" media="(max-width: 800px)">
            <img src="banner_w800.jpg" alt="">
        </picture>
    - @media (min-width: 769px) {
	.bg {
		background-image: url(bg1080.jpg);
	}
}
@media (max-width: 768px) {
	.bg {
		background-image: url(bg768.jpg);
	}
}
    - 调整图片大小
        我们可以用两张图片来实行优化。一开始，只加载缩略图，当用户悬停在图片上时，才加载大图。还有一种办法，即对大图进行延迟加载，在所有元素都加载完成后手动更改大图的 src 进行下载。
    - 降低图片质量
        image-webpack-loader
        ```
        {
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use:[
    {
    loader: 'url-loader',
    options: {
      limit: 10000, /* 图片大小小于1000字节限制时会自动转成 base64 码引用*/
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    /*对图片进行压缩*/
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
      }
    }
  ]
}
        ```
- 尽可能利用 CSS3 效果代替图片
    linear-gradient
-  使用 webp 格式的图片
- 按需加载代码
    提取第三方库

-   减少重绘重排
    什么时候会触发
    - 添加或删除可见的 DOM 元素
元素位置改变
元素尺寸改变
内容改变
浏览器窗口尺寸改变
    怎么做
    - 用 JavaScript 修改样式时，最好不要直接写样式，而是替换 class 来改变样式
    - 如果要对 DOM 元素执行一系列操作，可以将 DOM 元素脱离文档流，修改完成后，再将它带回文档。推荐使用隐藏元素（display:none）或文档碎片（DocumentFragement），都能很好的实现这个方案。

- 使用事件委托
    ```
    <ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>凤梨</li>
</ul>

// good
document.querySelector('ul').onclick = (event) => {
  const target = event.target
  if (target.nodeName === 'LI') {
    console.log(target.innerHTML)
  }
}

// bad
document.querySelectorAll('li').forEach((e) => {
  e.onclick = function() {
    console.log(this.innerHTML)
  }
}) 

    ```
- 使用 Web Workers
    Web Worker 使用其他工作线程从而独立于主线程之外，它可以执行任务而不干扰用户界面。一个 worker 可以将消息发送到创建它的 JavaScript 代码, 通过将消息发送到该代码指定的事件处理程序（反之亦然）。
Web Worker 适用于那些处理纯数据，或者与浏览器 UI 无关的长时间运行脚本。
    ```
    var myWorker = new Worker('worker.js');
// 你可以通过postMessage() 方法和onmessage事件向worker发送消息。
first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
    ```

21. 降低 CSS 选择器的复杂性
    浏览器读取选择器，遵循的原则是从选择器的右边到左边读取。
    ```
    #block .text p {
	    color: red;
    }
    查找所有 P 元素。
查找结果 1 中的元素是否有类名为 text 的父元素
查找结果 2 中的元素是否有 id 为 block 的父元素

选择器越短越好。
尽量使用高优先级的选择器，例如 ID 和类选择器。
避免使用通配符 *
    ```

- 「一道面试题」输入URL到渲染全面梳理中-页面渲染篇
    https://juejin.cn/post/6844904155077672968#heading-2
    从URL输入到页面渲染大体上可以分为网络通信 和 页面渲染 两个阶段
    ## 网络通信 
        - TCP/IP四层协议
            应用层(为用户提供所需要的各种服务)>传输层(为应用层实体提供端到端的通信功能，保证了数据包的顺序传送及数据的完整性)>网络层(主要解决主机到主机的通信问题)>网络接口层(负责监视数据在主机和网络之间的交换 物理层+数据链路层)
        - 浏览器输入URL
            输入URL按下回车后，就进入了 应用层 开始往下走，浏览器会开一个线程来处理
            先对URL进行解析，一般包括 ( 协议头、主机域名或IP地址、端口号、请求路径、查询参数、hash等等 )，然后打开网络线程发出一个完整的请求

        - 应用层DNS解析域名
            域名或IP解析
            - 首先会查看浏览器DNS缓存
            - 没有的话就查询计算机本地DNS缓存
            - 还没有就询问递归式DNS服务器（就是网络提供商，一般这个服务器都会有自己的缓存，所以IP查询大多都在这里完成）
            - 如果依然没有缓存，那就需要通过 根域名服务器 和 TLD域名服务器 再到对应的 权威DNS服务器 找记录，并缓存到 递归式服务器，然后 递归服务器 再将记录返回给本地

        - 应用层客户端发送HTTP请求
            IP地址有了，应用层的客户端想看页面，就会发一个 HTTP 请求，HTTP 请求分为 请求报头 和 请求主体
            请求主体就是客户端要发送给服务器或者服务器返回给客户端的内容，请求报头比较重要，包含通信方式也就是请求方法 (POST / GET / INPUT / DELETE等)、URI、协议版本号以及请求头部方法（Accept、Cache-Control…）
        - 传输层TCP传输报文
            应用层 发送了一个请求后，为了传输方便，在 传输层 会把从 应用层 接收到的数据 ( 就是那个HTTP请求报文 ) 进行分割，并为每个报文编号后再转发给 网络层，编号就是方便服务器接收时能准确地还原报文信息，这里用到了我们常说的 TCP协议
            TCP协议 会通过 三次握手 保证传输的安全可靠，也可以这样说，客户端在 传输层 开始和服务器通过 三次握手 建立 TCP/IP 连接
            所谓的 三次握手 ，就是发送端先发送一个带有 SYN ( synchronize ) 标志的数据包给接收端，在一定的延迟时间内等待接收端的回复，接收端收到数据包后，传回一个带有 SYN / ACK 标志的数据包以表示传达确认信息，接收方收到后再发送一个带有 ACK 标志的数据包给接收端以表示握手成功，双方都是接收发送的能力
        - 网络层IP协议查询MAC地址
            建立连接后 网络层 IP协议会查询 MAC地址 进行数据包的传输
            IP协议 负责把各种数据包传送给接收方，因为要保证确实能传输到对方，所以需要确定接收方的 MAC地址 也就是我们说的物理地址，IP地址 可以和 MAC地址 通过映射表一一配对上，一个网络设备的IP地址可以更换，但是MAC地址一般是固定不变的，而 IP 到 MAC 的解析过程则依赖于 ARP协议，它可以根据通信方的 IP地址 反查出对应的 MAC地址
            因为一般通信双方是无法直接进行通信的（除非在同一局域网），会经过多台计算机或路由器来进行中转，所以也就需要 ARP 来一路确认下一个中转站，协助数据包的传输
        - 数据到达数据链路层
            找到对方的 MAC地址 后，就会将数据发送到 数据链路层传输，到此客户端发送请求阶段就结束了
        - 服务器接收数据
            而后接收端的服务器在 数据链路层 接收到数据包，再通过相反的方式将数据一层一层的还原回 应用层 ，这过程中包括在运输层那里通过TCP协议将分段的数据包重新组成原来的HTTP请求报文
            请求到了后台服务器，一般来说会有统一的验证，如安全验证、跨域验证等，验证未通过就直接返回相应的HTTP报文，验证通过后，就会进入后台代码，此时程序收到请求，然后会执行对应的操作
如果浏览器访问过，且缓存上有对应的资源，就会与服务器最后修改时间对比，一致便返回304，告诉浏览器可使用本地缓存

    - 服务器响应请求
        服务器接收到客户端发送的HTTP请求后，会查找客户端请求的资源，并返回响应报文
        另外现在很多网站都会有重定向功能，比如请求域名省去了 www.，它会给你重定向来添加上，这也就意味着第一次请求 HTML 的过程中我们是需要发起两次请求的
        这样做的原因在于搜索引擎会认为 www.xxx.com 和 xxx.com 是两个网站，从而造成网站排名下降，还有如果两个地址都有打开过，会造成多余 ( 双倍 ) 的浏览器缓存

    - 服务器返回相应文件
        请求成功后，服务器会返回相应的网页，浏览器接收到响应成功的报文后便开始下载网页，至此，网络通信结束
    - 解析HTML构建DOM Tree
    - 解析CSS构建CSSOM Tree
    - 构建渲染树 (Render Tree)
    - 布局 (Layout)
        浏览器计算了哪些节点应该是可见的以及它们的计算样式
    - 绘制 (Painting)
        转换成屏幕上的实际像素，
    - 合成(Composite)

    - 首先，客户端浏览器输入URL，由于是域名，应用层DNS开始解析域名
    - 接着，应用层客户端发送一个HTTP请求，把拿到的应用层HTTP请求报文数据分割编号，为了方便安全的传输，传输层会通过TCP三次握手建立TCP/IP链接
    - 建立连接后 网络层 IP协议会查询服务器 MAC地址 也就是物理地址进行数据包的传输
    - 找到对方的 MAC地址 后，将数据发送到 数据链路层传输，到此客户端发送请求阶段结束
    - 接收端的服务器在 数据链路层 接收到数据包，再通过相反的方式将数据一层一层的还原回 应用层
    - 服务器接收到客户端发送的HTTP请求后，会查找客户端请求的资源，并返回响应报文
    - 请求成功后，服务器会返回相应的网页，浏览器接收到响应成功的报文后便开始下载网页，至此，网络通信结束
    - 浏览器拿到网页文件后，首先根据顶部定义的DTD类型进行对应解析方式，网页解析会交给内部GUI渲染线程处理
    - 接着构建DOM树和CSSOM树，过程中，如果遇到节点是 JS ，就会调用 JS引擎 对 JS代码进行解释执行，此时由于 JS引擎 和 GUI渲染线程 互斥，GUI渲染线程 会被挂起，渲染过程停止，如果 JS 代码的运行中对DOM树进行了修改，那么DOM构建要从新开始，然后DOM树和CSSOM树构建为渲染树
    - 然后进入布局阶段，计算渲染树节点在设备视口内的确切位置和大小
    - 再接着将渲染树中每个节点转换成屏幕上的实际像素，也就是绘制阶段
    - 最后的合成阶段浏览器会将各层信息发送给GPU，GPU将各层合成，显示在屏幕上


    ## 页面渲染
    发起一个请求，我们拿到了页面，下载完的网页将被交给浏览器内核（渲染进程）进行处理
    - 首先，根据顶部定义的DTD类型进行对应的解析方式
        html5  html4  <!DOCTYPE html>
    - 渲染进程内部是多线程的，网页的解析将会被交给内部的GUI渲染线程处理
    - 渲染线程中的HTML解释器，将HTML网页和资源从字节流解释转换成字符流
    - 再通过词法分析器将字符流解释成词
    - 之后经过语法分析器根据词构建成节点，最后通过这些节点组建一个DOM树
    - 这个过程中，如果遇到的DOM节点是 JS 代码，就会调用 JS引擎 对 JS代码进行解释执行，此时由 JS引擎 和 GUI渲染线程 的互斥，GUI渲染线程 就会被挂起，渲染过程停止，如果 JS 代码的运行中对DOM树进行了修改，那么DOM的构建需要从新开始
    - 如果节点需要依赖其他资源，图片/CSS等等，就会调用网络模块的资源加载器来加载它们，它们是异步的，不会阻塞当前DOM树的构建
    - 如果遇到的是 JS 资源URL（没有标记异步），则需要停止当前DOM的构建，直到 JS 的资源加载并被 JS引擎 执行后才继续构建DOM
    - 对于CSS，CSS解释器会将CSS文件解释成内部表示结构，生成CSS规则树
    - 然后合并CSS规则树和DOM树，生成 Render渲染树，也叫呈现树
    - 最后对 Render树进行布局和绘制，并将结果通过IO线程传递给浏览器控制进程进行显示

    - HTTP与HTTPS的区别？
        HTTP协议传输的数据都是未加密的，也就是明文的，所以使用HTTP协议传输隐私信息非常不安全，为了保证这些隐私数据能加密传输，于是网景公司设计了 SSL（Secure Sockets Layer） 协议用于对HTTP协议传输的数据进行加密，从而就诞生了HTTPS
        HTTPS = SSL+HTTP
        - HTTPS协议需要到 CA 申请证书，一般免费证书较少，因而需要一定费用
        - HTTP是超文本传输协议，信息是明文传输，HTTPS 则是具有安全性的 SSL 加密传输协议
        - HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443
        - HTTP的连接很简单，是无状态的，HTTPS协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比HTTP协议安全

    - HTTP 状态码分别代表什么
        1xx: 协议处理中状态，还需后续操作
            101 switch protocol  比如切换到websocket  
        2xx: 成功状态
            201 Created 
            206 Partial Content 部分内容。服务器成功处理了部分GET请求
        3xx: 重定向状态，资源位置发生变动，需要重新请求
            301 Moved Permanently
            302 临时移动
            304 Not Modified
            307 Temporary Redirect   临时重定向。与302类似。使用GET请求重定向
        4xx: 请求报文有误
            400 Bad Request  客户端请求的语法错误，服务器无法理解
            401 Unauthorized 请求要求用户的身份认证
            403 Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求
            404 Found
            405 	Method Not Allowed
            407  Proxy Authentication Required  请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权

        5xx: 服务器端错误
            500  Internal Server Error  服务器内部错误，无法完成请求
            501  Not Implemented   服务器不支持请求的功能，无法完成请求
            502  Bad Gateway   作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应 数据库
            
    - HTTP 的请求方法？
        HTTP1.0 定义了三种请求方法： GET, POST 和 HEAD方法
            类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头
        HTTP1.1 新增了六种请求方法  OPTIONS、PUT、PATCH、DELETE、TRACE 和 CONNECT 
            PUT 从客户端向服务器传送的数据取代指定的文档的内容  替换
            PATCH 是对 PUT 方法的补充，用来对已知资源进行局部更新
            OPTIONS  允许客户端查看服务器的性能
            TRACE   回显服务器收到的请求，主要用于测试或诊断
            CONNECT HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器  

- TCP/IP四、五层，OSI七层模型有什么区别
- DNS解析可优化吗，为什么优化又怎样优化
    可以优化
    很多小型网站，DNS解析时间都接近 0.5s，有些甚至需要 1s 左右才可以解析出结果
    DNS解析时间都可以控制在 200ms 左右，而带宽在 100M 左右的网站，经过优化，DNS解析时间可以控制在 50~100ms
    这个过程中浏览器什么都不会做直到DNS查询完毕
    DNS解析优化-善用缓存之TTL
    DNS存在着多级缓存，每次找这么多级，很定耗时间，我们要尽量多的让用户直接从运营商的DNS缓存中拿到解析记录，这样就不需要走根域名服务器以下的这些过程，自然就节省了一些时间
    购买域名做域名解析时，有一个 TTL 值，它指的是域名解析的生命周期  
    简单来说它表示DNS服务器解析域名时记录在DNS服务器上的缓存时间，
    我们自己肯定清楚自己的服务器有没有多台或备份，若无备份，那服务器宕机时只能生抗
    所以这时你的 TTL 设置就越长越好，当然了，也不能太长，一般设置 TTL 3600 即可
    若有备份或多台服务器，会发生由于服务器宕机需要及时做切换，TTL 时间越短切换越及时，但是 TTL 时间越短，也就意味着运营商DNS经常缓存不住，一般用户，设置为 TTL 600 即可，如果对及时切换，要求特别苛刻的网站，设置 TTL 120 就行

    - DNS解析优化-负载均衡
        DNS服务器会返回一个跟用户最接近的点的IP地址给用户，CDN节点的服务器负责响应用户的请求，提供所需的内容，CDN厂商的域名解析服务器用户量多被访问的次数也多，域名解析服务器的A记录基本上会被各地运营商的DNS一直缓存着，所以服务效果也是最好的

    - TCP/IP协议与UDP协议优缺点及区别？
        TCP 的优点： 稳定可靠， 这体现在TCP传递数据之前，会有三次握手来建立连接，且在数据传递时，有确认、窗口、重传、拥塞控制机制，在数据传完后，还会断开连接用来节约一些系统资源
        TCP的缺点：占用系统资源高，慢且效率低，TCP在传递数据之前，要先建连接，会消耗时间，在数据传递时，确认机制、重传机制、拥塞控制机制等都会消耗大量的时间，而且要在每台设备上维护所有的传输连接，每个连接都会占用系统的CPU、内存等硬件资源
        UDP 的优点： 快，UDP是一个无状态的传输协议，所以它在传递数据时非常快
        UDP 的缺点： 不可靠，不稳定，因为UDP没有TCP那些可靠的机制，在数据传递时，如果网络质量不好，就会很容易丢包
        一般当我们对网络通讯质量有要求的时候，就应该使用TCP，要把整个数据准确无误的传递给对方，比如HTTP、HTTPS、FTP等协议，当对网络通讯质量要求不高的时候，要求网络通讯速度能尽量的快，这时就可以使用UDP，如语音，视频等
        - TCP协议基于连接UDP协议无连接
        - TCP协议面向字节流，简单说TCP把数据看成一连串无结构的字节流而UDP协议面向报文
        - TCP协议传送数据，无差错不丢失不重复，且按序到达，UDP不保证可靠交付和顺序，可能丢包
        - TCP首部开销20字节，UDP的首部开销较小，只有8个字节
        - TCP协议连接只能是点到点的，UDP支持一对一，一对多，多对一和多对多的交互通信

    - 三次握手

    - 为什么建立连接是三次握手，关闭连接确是四次挥手？
        建立连接的时候， 服务器在 LISTEN (监听状态) ，收到建立连接请求的 SYN 报文后，把 ACK 和 SYN 放在一个报文里发送给客户端就可以了
        而关闭连接时，服务器收到对方的 FIN 报文时，仅代表对方不再发送数据了但是还能接收数据，而自己未必全部数据都发送给对方了，所以自己可以立即关闭，也可以发送一些数据给对方后，再发送 FIN 报文给对方来表示同意现在关闭连接，因此，己方 ACK 和 FIN 一般都会分开发送，从而导致多了一次

    - CSS 资源加载会阻塞渲染怎样优化？
        优化DOM树，DOM尽可能的小
        CSS尽量用 id 和 class 少直接用标签，因为标签节点样式是可以继承的，所以在构建的过程中浏览器得递归 DOM 树来确定元素到底是什么样式
    
    - 什么会引起回流？
        页面渲染初始化

        DOM结构改变，比如删除了某个节点

        render树变化，比如减少了 padding ( 内边距 )

        窗口 resize 事件触发时

        某些 JS 属性，引发回流，
            offset scroll  cilent  width, height  
    - 如何减少和避免回流重绘？
        减少逐项更改样式，最好一次性更改 style，或者将样式定义为 class 并一次性更新
        避免循环操作DOM，让DOM离线后再修改
        创建一个 documentFragment ，在它上面应用所有DOM操作，最后再把它添加到 window.document
        先把DOM节点 display:none ( 会触发一次 reflow)，然后做修改后，再把它显示出来
        克隆一个DOM节点在内存里，修改之后，与在线的节点相替换





