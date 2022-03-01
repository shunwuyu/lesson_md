[source](https://juejin.cn/post/6844904132067885064)

- 00-16-EA-AE-3C-40    这是什么？
    就是一个MAC地址，

- HTTP 定义
    1. 传输  Transfer
        两点之间
    2. 超文本 Hypertext
        文字、图片、音频、视频等超文本数据
    3. 约定和规范 Protocol
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/20/17194b59c57aeff9~tplv-t2oaga2asx-watermark.awebp)
    
    HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范

- 五层  四层  七层分别是？
    IP地址为32位 网络层  MAC地址为48位 数据链路层。
    HTTP TCP/IP 网络模型  一般是五层模型
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/20/17194b59c5f7d455~tplv-t2oaga2asx-watermark.awebp)

    1、物理层
        

    也可以分为四层，就是把链路层和物理层都表示为网络接口层
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/20/17194b59c6f124f4~tplv-t2oaga2asx-watermark.awebp)

    OSI 七层网络模型，表示层和会话层

-  HTTPS = HTTP + TLS/SSL  区别
    https 端口是多少？
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/20/17194b59c7e0e02b~tplv-t2oaga2asx-watermark.awebp)
    1. 最简单的，HTTP 在地址栏上的协议是以 http:// 开头，而 HTTPS 在地址栏上的协议是以 https:// 开头
    2. HTTP 是未经安全加密的协议，它的传输过程容易被攻击者监听、数据容易被窃取、发送方和接收方容易被伪造；而 HTTPS 是安全的协议，
    3. HTTP 的默认端口是 80，而 HTTPS 的默认端口是 443。 

- HTTP Get 和 Post 区别
    get 方法一般用于请求 请求服务器返回资源
    post 方法 一般用于 <form> 表单的提交， 相当于是把信息提交给服务器，等待服务器作出响应，get 相当于一个是 pull/拉的操作，而 post 相当于是一个 push/推的操作。
    get 方法是不安全的，因为你在发送请求的过程中，你的请求参数会拼在 URL 后面，从而导致容易被攻击者窃取，对你的信息造成破坏和伪造；
    /test/demo_form.asp?name1=value1&name2=value2
    post 方法是把参数放在请求体 body 中的，这对用户来说不可见
    POST /test/demo_form.asp HTTP/1.1
    Host: w3schools.com
    name1=value1&name2=value2
    get 请求的 URL 有长度限制，而 post 请求会把参数和值放在消息体中，对数据长度没有要求。
    get 请求会被浏览器主动 cache，而 post 不会，除非手动设置。
    get 请求在浏览器反复的 回退/前进 操作是无害的，而 post 操作会再次提交表单请求。
    get 请求在发送过程中会产生一个 TCP 数据包；post 在发送过程中会产生两个 TCP 数据包。对于 get 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应 200（返回数据）；而对于 post，浏览器先发送 header，服务器响应 100 continue，浏览器再发送 data，服务器响应 200 ok（返回数据）。


- 为什么网站能记住用户登录， 但还是无状态
    浏览器对于事务的处理没有记忆能力 Stateless Protocol
    这其实不是 HTTP 做的事情，起作用的是一个叫做 小甜饼(Cookie) 的机制。它能够让浏览器具有记忆能力。

    当你向服务端发送请求时，服务端会给你发送一个认证信息，服务器第一次接收到请求时，开辟了一块 Session 空间（创建了Session对象），同时生成一个 sessionId ，并通过响应头的 **Set-Cookie：JSESSIONID=XXXXXXX **命令，向客户端发送要求设置 Cookie 的响应； 客户端收到响应后，在本机客户端设置了一个 **JSESSIONID=XXXXXXX **的 Cookie 信息，该 Cookie 的过期时间为浏览器会话结束；
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/20/17194b59edaab6a1~tplv-t2oaga2asx-watermark.awebp)


    - 还有一种方式是使用 JWT 机制 
        它也是能够让你的浏览器具有记忆能力的一种机制 与 Cookie 不同，JWT 是保存在客户端的信息，它广泛的应用于单点登录的情况。
        - JWT 的 Cookie 信息存储在客户端，而不是服务端内存中。也就是说，JWT 直接本地进行验证就可以，验证完毕后，这个 Token 就会在 Session 中随请求一起发送到服务器，通过这种方式，可以节省服务器资源，并且 token 可以进行多次验证。

        - JWT 支持跨域认证，Cookies 只能用在单个节点的域或者它的子域中有效。如果它们尝试通过第三个节点访问，就会被禁止。使用 JWT 可以解决这个问题，使用 JWT 能够通过多个节点进行用户认证，也就是我们常说的跨域认证。

- 传输层有哪两个协议？
    UDP 和 TCP

- UDP?
    UDP 的全称是 User Datagram Protocol 用户数据报协议
    不需要所谓的握手操作，从而加快了通信速度，允许网络上的其他主机在接收方同意通信之前进行数据传输。

    UDP 的特点主要有  视屏
        UDP 能够支持容忍数据包丢失的带宽密集型应用程序
        UDP 具有低延迟的特点
        UDP 能够发送大量的数据包
        UDP 能够允许 DNS 查找，DNS 是建立在 UDP 之上的应用层协议。
- TCP?
    Transmission Control Protocol ，传输控制协议
    通过三次握手来建立 TCP 连接，三次握手就是用来启动和确认 TCP 连接的过程。一旦连接建立后，就可以发送数据了，当数据传输完成后，会通过关闭虚拟电路来断开连接。

    TCP 能够确保连接的建立和数据包的发送
    TCP 支持错误重传机制
    TCP 支持拥塞控制，能够在网络拥堵的情况下延迟发送
    TCP 能够提供错误校验和，甄别有害的数据包。

- TCP 三次握手和四次挥手
    TCP 三次握手
    SYN	这个消息是用来初始化和建立连接的。
    ACK	帮助对方确认收到的 SYN 消息
    SYN-ACK	本地的 SYN 消息和较早的 ACK 数据包
    FIN	用来断开连接

    握手的过程  准确   双方的发送接收 能力正常
    1. 第一次握手：客户端给服务器发送一个 SYN 报文。  X
    2. 第二次握手：服务器收到 SYN 报文之后，会应答一个 SYN+ACK 报文。   X + 1
    3. 第三次握手：客户端收到 SYN+ACK 报文之后，会回应一个 ACK 报文。
    4. 服务器收到 ACK 报文之后，三次握手建立完成。 

    第一次握手 发送能力、服务端的接收能力是正常的
    第二次握手 服务端的接收、发送能力，客户端的发送能力是正常的
    第三次握手：客户端发包，服务端收到了。
        ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf9bd409c5624da0970f8227784ac728~tplv-k3u1fbpfcp-watermark.awebp)


