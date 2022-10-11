[source](https://github.com/lvbowen/WebSocket)

- 服务器端推送消息  WebSocket 
HTTP1.x 协议缺限只能由客户端发起请求
- 双向通信
  WebSocket 的出现，让服务器端可以主动向客户端发送信息，使得浏览器具备了实时双向通信的能力。
- 当客户端要和服务端建立 WebSocket 连接时，在客户端和服务器的握手过程中，客户端首先会向服务端发送一个 HTTP 请求，包含一个 Upgrade 请求头来告知服务端客户端想要建立一个 WebSocket 连接。
  Upgrade: websocket
  Connection: Upgrade
Sec-WebSocket-Accept: ZUip34t+bCjhkvxxwhmdEOyx9hE=
Upgrade: websocket
Status Code: 101 Switching Protocols
从 HTTP 协议转换为 WebSocket 通信协议。 转换成功之后，该连接并没有中断，而是建立了一个全双工通信，后续发送和接收消息都会走这个连接通道。
