[source](https://juejin.cn/post/6844904100035821575)

- 网络知识要准备哪些？
  HTTP 应用层   TCP/IP 网络层
  ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/23/17104ea1fdee5669~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

- HTTP 报文结构是怎样的
  何为报文  http报文是在http应用程序之间发送的数据块，以文本形式的元信息开头，描述了报文的内容和含义，后面跟着可选的数据部分。报文在服务器和代理之间流动。
  流向服务器
  流向代理
  请求报文和响应报文 有一定的区别

  1. 对于 TCP 而言  TCP头和数据部分  HTTP基于TCP/IP
  2. 而 HTTP 也是header + body的结构
    起始行 + 头部 + 空行 + 实体
  
  - 起始行
    GET /home HTTP/1.1   请求行
    方法 + 路径 + http版本。
    响应报文来说  HTTP/1.1 200 OK  响应报文的起始行也叫做状态行
    http版本、状态码和原因
    在起始行中，每两个部分之间用空格隔开，最后一个部分后面应该接一个换行，严格遵循ABNF语法规范。

  - 头部
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/22/170ffd6012e2fc88~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
    展示一下请求头和响应头在报文中的位置:
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/22/170ffd62af8538e4~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

    字段是相当多的   牵扯到http非常多的特性
    1. 字段名不区分大小写
    2. 字段名不允许出现空格，不可以出现下划线_
    3. 字段名后面必须紧接着:
    Accept-Charset: utf-8
    IF-Modified-Since: 之后被修改 请求成功， 未被修改304代码
    CookieHTTP:   会把保存在请求域名下的所有cookie 值一起发送给web服务器

  - 空行
    很重要，用来区分开头部和实体
  - 实体
    就是具体的数据了，也就是body部分。请求报文对应请求体, 响应报文对应响应体。

- 如何理解 HTTP 的请求方法
  有哪些请求方法？
  http/1.1规定了以下请求方法(注意，都是大写):
  1. GET: 通常用来获取资源
  2. HEAD: 获取资源的元信息
  3. POST: 提交数据，即上传数据
  4. PUT: 修改数据
  5. DELETE: 删除资源
  6. CONNECT: 建立连接隧道，用于代理服务器
  connect的作用就是将服务器作为代理，让服务器代替用户去访问其他网页（说白了，就是翻墙），之后将数据返回给用户。
  ```
  CONNECT https://www.jianshu.com/u/f67233ce6c0c:80 HTTP/1.1
  Host: www.web-tinker.com:80
  Proxy-Connection: Keep-Alive
  Proxy-Authorization: Basic *
  Content-Length: 0
  ```
  HTTP/1.1 200 Connection Established
  7. OPTIONS: 列出可对资源实行的请求方法，用来跨域请求
    options在什么情况下出现
    - 跨域调用，
    - 自定义头部
    - 请求头的content-type参数：application/x-www-form-urlencoded，multipart/form-data，text/plain之外的格式
    说白就是为了服务器安全 
    options通常是浏览器自动发起的，目的就是去服务器检查一下接下来要到用的方法(GET、POST、PUT、detele)在服务器上是否支持;
    对于服务器该如何处理
      来源是否允许
      自定义的头部是否包含(这个和你项目有关)
      检查content-type 的内容是否是你期望的
  8. TRACE: 追踪请求-响应的传输路径

- GET 和 POST 有什么区别？
  最直观的是语义上的区别。
  - 从缓存的角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会。
  - 从编码的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。
    encodeURIComponent 
  - 从参数的角度，GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息。
  - 从幂等性的角度，GET是幂等的，而POST不是。(幂等表示执行相同的操作，结果也是相同的)
  - 从TCP的角度，GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue)， 然后发 body 部分。(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)

- 如何理解 URI
  URI, 全称为(Uniform Resource Identifier), 也就是统一资源标识符，它的作用很简单，就是区分互联网上不同的资源。
  URL 与URI区别
  URI包含了URN和URL两个部分
  ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/22/170ffd677629b70d~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
  scheme 表示协议名，比如http, https, file等等。后面必须和://连在一起。
  user:passwd@ 表示登录主机时的用户信息，不过很不安全，不推荐使用，也不常用
  host:port表示主机名和端口。
  path表示请求路径，标记资源所在位置。
  query表示查询参数，为key=val这种形式，多个键值对之间用&隔开。
  fragment表示 URI 所定位的资源内的一个锚点，浏览器可以根据这个锚点跳转到对应的位置。
  http 和 https 的默认端口分别为80、443

- URI 编码
  URI 只能使用ASCII, ASCII 之外的字符是不支持显示的，而且还有一部分符号是界定符，如果不加以处理就会导致解析出错。

  因此，URI 引入了编码机制，将所有非 ASCII 码字符和界定符转为十六进制字节值，然后在前面加个%
  空格被转义成了%20，三元被转义成了%E4%B8%89%E5%85%83

  URL是URI的一个子集，告诉我们访问网络位置的方式
http://bitpoetry.io/posts/hello.html

URN是URI的子集，包括名字（给定的命名空间内），但是不包括访问方式
bitpoetry.io/posts/hello.html#intro

- 如何理解 HTTP 状态码
  1xx: 表示目前是协议处理的中间状态，还需要后续操作。
  2xx: 表示成功状态。
  3xx: 重定向状态，资源位置发生变动，需要重新请求。
  4xx: 请求报文有误。
  5xx: 服务器端发生错误。

- 1xx
  101 Switching Protocols。在HTTP升级为WebSocket的时候，如果服务器同意变更，就会发送状态码 101。
  2xx
    200 OK是见得最多的成功状态码。通常在响应体中放有数据。
    201 Created
    204 No Content含义与 200 相同，但响应头后没有 body 数据。
    206 Partial Content顾名思义，表示部分内容，它的使用场景为 HTTP 分块下载和断点续传，当然也会带上相应的响应头字段Content-Range
  3xx
    301 Moved Permanently即永久重定向，   对应着302 Found，即临时重定向。
    http://www.baidu.com  307 请求方法不变   302  GET方法不会发生变更， 其他方法可能变更为GET方法
    304 Not Modified: 当协商缓存命中时会返回这个状态码 
    协商缓存，服务器资源未改动：
    浏览器向浏览器缓存表请求a.js;
    浏览器缓存数据表命中了协商缓存，给你一个ETag=111，Last-Modified=2018.6.3;
    浏览器请求后端服务器并且在request.header中，加入If-None-Match=111，If-Modified-Since=2018.6.3；
    后端服务器告诉浏览器服务端的该资源并未修改，直接读本地缓存就行，返回的是状态码是304；
    浏览器向浏览器缓存数据表请求，从本地缓存中读取资源。
  4xx
    400 Bad Request: 开发者经常看到一头雾水，只是笼统地提示了一下错误，并不知道哪里出错了。
    403 Forbidden: 这实际上并不是请求报文出错，而是服务器禁止访问，原因有很多，比如法律禁止、信息敏感。
    404 Not Found: 资源未找到，表示没在服务器上找到相应的资源。
    405 Method Not Allowed: 请求方法不被服务器端允许。
    406 Not Acceptable: 资源无法满足客户端的条件。
    408 Request Timeout: 服务器等待了太长时间。
    409 Conflict: 多个请求发生了冲突。
    413 Request Entity Too Large: 请求体的数据过大。
      1024字节
    414 Request-URI Too Long: 请求行里的 URI 太大。
    429 Too Many Request: 客户端发送的请求过多。
    431 Request Header Fields Too Large请求头的字段内容太大。

- 005: 简要概括一下 HTTP 的特点？HTTP 有哪些缺点？
  1. 灵活可扩展，主要体现在两个方面。一个是语义上的自由，只规定了基本格式，比如空格分隔单词，换行分隔字段，其他的各个部分都没有严格的语法限制。另一个是传输形式的多样性，不仅仅可以传输文本，还能传输图片、视频等任意数据，非常方便。
  2. 可靠传输。HTTP 基于 TCP/IP，因此把这一特性继承了下来。这属于 TCP 的特性，不具体介绍了。
  3. 请求-应答。也就是一发一收、有来有回， 当然这个请求方和应答方不单单指客户端和服务器之间，如果某台服务器作为代理来连接后端的服务端，那么这台服务器也会扮演请求方的角色。
  4. 无状态。这里的状态是指通信过程的上下文信息，而每次 http 请求都是独立、无关的，默认不需要保留状态信息。

  HTTP 缺点
  无状态
    所谓的优点和缺点还是要分场景来看的，对于 HTTP 而言，最具争议的地方在于它的无状态。
    在需要长连接的场景中，需要保存大量的上下文信息，以免传输大量重复的信息，那么这时候无状态就是 http 的缺点了。
    但与此同时，另外一些应用仅仅只是为了获取一些数据，不需要保存连接上下文信息，无状态反而减少了网络开销，成为了 http 的优点。

  明文传输
    即协议里的报文(主要指的是头部)不使用二进制数据，而是文本形式。
    这当然对于调试提供了便利，但同时也让 HTTP 的报文信息暴露给了外界，给攻击者也提供了便利。WIFI陷阱就是利用 HTTP 明文传输的缺点，诱导你连上热点，然后疯狂抓你所有的流量，从而拿到你的敏感信息。

  队头阻塞问题
    当 http 开启长连接时，共用一个 TCP 连接，同一时刻只能处理一个请求，那么当前请求耗时过长的情况下，其它的请求只能处于阻塞状态，也就是著名的队头阻塞问题。接下来会有一小节讨论这个问题。