[source](https://github.com/windlany/happy-chat/blob/master/www/js/chat-client.js)
websocket是HTML5的一个新协议，它允许服务端向客户端传递信息，实现浏览器和客户端双工通信。websocket弥补了HTTP不支持长连接的特点，那么在学习websocket之前我们先来了解以下HTTP。

GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com

HTTP的头部多了一个头部，其实我们就可以说，websocket借用了HTTP的握手，是HTTP的一个解决特定问题的补丁。