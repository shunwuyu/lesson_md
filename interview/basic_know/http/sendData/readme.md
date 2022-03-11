[](https://juejin.cn/post/7050430220632850440)

- application/x-www-form-urlencoded 意思是？
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b09a4411e26a40a0be7272dae3213eeb~tplv-k3u1fbpfcp-watermark.awebp?)

- 如何向服务器提交数据

# 用 HTTP 提交数据

- 目的是？
  通过http/https向服务端提交数据
- 方式有
   xhr/fetch 的 api 或者 axios 这种封装了一层的库

- 通过url 传递方式 两种
  1. url param
    Restful 的规范允许把参数写在 url 中
    http://guang.zxg/person/1111   1111 就是路径中的参数 
  2. query
    ？后面的用 & 分隔的字符串传递数据
    http://guang.zxg/person?name=guang&age=20
    非英文的字符和一些特殊字符怎么办？ encodeURLComponent 的 api  封装了一层的 qeury-string 
    1.js
    如何把对象转成qs?  qeury-string 

- 通过 body 传递数据3种
  1. form-urlencoded
    直接用 form 表单提交数据就是这种
    它和 query 字符串的方式的区别只是放在了 body 里
    content-type 是 application/x-www-form-urlencoded
    看图 ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b09a4411e26a40a0be7272dae3213eeb~tplv-k3u1fbpfcp-watermark.awebp?)
    get 是把数据拼成 query 字符串放在 url 后面，于是设计表单的 post 提交方式的时候就直接用相同的方式把数据放在了 body 里。
    通过 & 分隔的 form-urlencoded 的方式需要对内容做 url encode，如果传递大量的数据，比如上传文件的时候就不是很合适了，因为文件 encode 一遍的话太慢了，这时候就可以用 form-data。
  
  2. form-data
    不再是通过 & 分隔数据 而是用 --------- + 一串数字做为分隔符
    ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af563395e1984ea5b90a19a04ce6730f~tplv-k3u1fbpfcp-watermark.awebp?)
    form-data 需要指定 content type 为 multipart/form-data
    然后指定 boundary 也就是分割线
    很明显，这种方式适合传输文件，而且可以传输多个文件。
    但是毕竟多了一些只是用来分隔的 boundary，所以请求体会增大。
  3. json
    form-urlencoded 需要对内容做 url encode，而 form data 则需要加很长的 boundary，两种方式都有一些缺点。如果只是传输 json 数据的话，不需要用这两种。
    ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c429166d35264cea922ebe45d399d4ef~tplv-k3u1fbpfcp-watermark.awebp?)
    我们平时传输 json 数据基本用的是这种。

# 99%的人都理解错了HTTP中GET与POST的区别
  1. GET把参数包含在URL中
  2. POST通过request body传递参数
  3. GET在浏览器回退时是无害的，而POST会再次提交请求。
  4. GET产生的URL地址可以被Bookmark，而POST不可以。
  5. GET请求会被浏览器主动cache，而POST不会，除非手动设置。
  6. GET请求只能进行url编码，而POST支持多种编码方式。
  7. GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
  8. GET请求在URL中传送的参数是有长度限制的，而POST么有。
    2048字节 不一样
  9. 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
  10. GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
  11. GET参数通过URL传递，POST放在Request body中

- 面试官不想听这些
  ## GET和POST本质上没有区别
  1. GET和POST是什么？HTTP协议中的两种发送请求的方法。
  2. HTTP是什么？HTTP是基于TCP/IP的关于数据如何在万维网中如何通信的协议。
  3. HTTP的底层是TCP/IP。所以GET和POST的底层也是TCP/IP
    GET/POST都是TCP链接。GET和POST能做的事情是一样一样的。你要给GET加上request body，给POST带上url参数，技术上是完全行的通的。

  TCP就像汽车，我们用TCP来运输数据，它很可靠，从来不会发生丢件少件的现象。但是如果路上跑的全是看起来一模一样的汽车，那这个世界看起来是一团混乱，送急件的汽车可能被前面满载货物的汽车拦堵在路上，整个交通系统一定会瘫痪。为了避免这种情况发生，交通规则HTTP诞生了。HTTP给汽车运输设定了好几个服务类别，有GET, POST, PUT, DELETE等等，HTTP规定，当执行GET请求的时候，要给汽车贴上GET的标签（设置method为GET），而且要求把传送的数据放在车顶上（url中）以方便记录。如果是POST请求，就要在车上贴上POST的标签，并把货物放在车厢里。当然，你也可以在GET的时候往车厢内偷偷藏点货物，但是这是很不光彩；也可以在POST的时候在车顶上也放一些数据，让人觉得傻乎乎的。HTTP只是个行为准则，而TCP才是GET和POST怎么实现的基本。
  我们只看到HTTP对GET和POST参数的传送渠道（url还是requrest body）提出了要求。“标准答案”里关于参数大小的限制又是从哪来的呢？
  运输公司。不同的浏览器（发起http请求）和服务器（接受http请求）就是不同的运输公司。 虽然理论上，你可以在车顶上无限的堆货物（url中无限加参数）。但是运输公司可不傻，装货和卸货也是有很大成本的，他们会限制单次运输量来控制风险，数据量太大对浏览器和服务器都是很大负担。业界不成文的规定是，（大多数）浏览器通常都会限制url长度在2K个字节，而（大多数）服务器最多处理64K大小的url。超过的部分，恕不处理。如果你用GET服务，在request body偷偷藏了数据，不同服务器的处理方式也是不同的，有些服务器会帮你卸货，读出数据，有些服务器直接忽略，所以，虽然GET可以带request body，也不能保证一定能被接收到哦。
  **GET和POST本质上就是TCP链接，并无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。**

  - GET产生一个TCP数据包；POST产生两个TCP数据包。
    1. 对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200
    2. 对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。

    GET只需要汽车跑一趟就把货送到了，而POST得跑两趟，第一趟，先去和服务器打个招呼“嗨，我等下要送一批货来，你们打开门迎接我”，然后再回头把货送过去。

  POST需要两步，时间上消耗的要多一点，看起来GET比POST更有效。因此Yahoo团队有推荐用GET替换POST来优化网站性能。但这是一个坑！跳入需谨慎。为什么？

  1. GET与POST都有自己的语义，不能随便混用。

  2. 据研究，在网络环境好的情况下，发一次包的时间和发两次包的时间差别基本可以无视。而在网络环境差的情况下，两次包的TCP在验证数据包完整性上，有非常大的优点。

  3. 并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。

  

  


