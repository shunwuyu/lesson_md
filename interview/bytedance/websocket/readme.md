[source](https://juejin.im/post/5dd4b991e51d450818244c30)

1. 短轮询
  短轮询的实现思路就是浏览器端每隔几秒钟向服务器端发送 HTTP 请求,服务端在收到请求后，不论是否有数据更新，都直接进行响应。在服务端响应完成，就会关闭这个 TCP 连接，代码实现也最简单，就是利用 XHR ， 通过 setInterval 定时向后端发送请求，以获取最新的数据。
  setInterval(function() {
  fetch(url).then((res) => {
      // success code
  })
}, 3000);
  优点：实现简单。
  缺点：会造成数据在一小段时间内不同步和大量无效的请求，安全性差、浪费资源 

2. 长轮询（Long-Polling）
  客户端发送请求后服务器端不会立即返回数据，服务器端会阻塞请求连接不会立即断开，直到服务器端有数据更新或者是连接超时才返回，客户端才再次发出请求新建连接、如此反复从而获取最新数据。大致效果如下：
  ![](https://user-gold-cdn.xitu.io/2019/9/29/16d7a81140d86334?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
  优点：比 Polling 做了优化，有较好的时效性。
  缺点：保持连接挂起会消耗资源，服务器没有返回有效数据，程序超时。

3. 走的是 HTTP 协议，服务器端无法主动向客户端推送信息
  当客户端要和服务端建立 WebSocket 连接时，在客户端和服务器的握手过程中，客户端首先会向服务端发送一个 HTTP 请求，包含一个 Upgrade 请求头来告知服务端客户端想要建立一个 WebSocket 连接。

  ws 相对应的也有 wss 用以建立安全连接
  Upgrade: websocket
  Connection: Upgrade
  Sec-WebSocket-Accept: ZUip34t+bCjhkvxxwhmdEOyx9hE=
  Upgrade: websocket
  响应行（General）中可以看到状态码 status code 是 101 Switching Protocols
  该连接并没有中断，而是建立了一个全双工通信，后续发送和接收消息都会走这个连接通道。

  客户端拿到服务端响应的 Sec-WebSocket-Accept 后，会拿自己之前生成的 Sec-WebSocket-Key 用相同算法算一次，如果匹配，则握手成功。然后判断 HTTP Response 状态码是否为 101（切换协议），如果是，则建立连接，大功告成。



websocet作为前端的客户端。 在js中实现。代表着查看页面源代码可以知道服务端的IP和port。甚至拼接数据的方式也能通过JS推导出来，那么如果恶意的大频率的发送消息怎么办，有没什么安全的限制方法。

1、端口和ip这个问题，可以用一个子域名到 nginx 通过 proxy_pass 转发到本地端口，可以隐藏端口号。
2. wss://“应用TLS加密传输，默认端口为443