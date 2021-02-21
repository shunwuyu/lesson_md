[source](https://juejin.cn/post/6916896932556832776)

- 301 302 307 有什么区别
  301，Moved Permanently。永久重定向，该操作比较危险，需要谨慎操作：如果设置了301，但是一段时间后又想取消，但是浏览器中已经有了缓存，还是会重定向。
  302，Found。临时重定向，但是会在重定向的时候改变 method: 把 POST 改成 GET，于是有了 307
  307，Temporary Redirect。临时重定向，在重定向时不会改变 method

curl 的使用
- curl https://shanyue.tech
- curl https://shanyue.tech --head    200

- 301 Moved Permanently   永久重定向
  curl www.bilibili.com -vvv  跳转到 https://www.bilibili.com/

- 302 Found  暂时重定向
  http 转向 https时，有时也会使用 302，如知乎
  curl www.zhihu.com -vvv

- 307  Temporary Redirect
  暂时重定向。也可作为 http 到 https 的重定向。
  HTTP严格传输安全协议 来让浏览器强制使用HTTPS与网站进行通信，以减少会话劫持风险。
  Non-Authoritative-Reason: HSTS

- 101 
  101 Switching Protocol
  服务器应客户端升级协议的请求对协议进行切换。
  ![](https://user-gold-cdn.xitu.io/2019/10/8/16dab07969bb8ac5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
  Connection: Upgrade该Connection头被设置为"Upgrade"以表示的升级要求。Upgrade: protocols所述Upgrade标头指定的一个或多个以逗号分隔的协议名称。检查服务器是否支持客户端所需要的协议。- 服务器可拒绝升级-在这种情况下，它发送回一个普通。或接受升级，在这种情况下，它会发送一个"101 Switching Protocols"带有升级标头的指定所选协议的标头。

# websocket场景

为了实现WebSocket通信，首先需要客户端发起一次普通HTTP请求, WebSocket的建立是依赖HTTP的。请求报文可能像下面这样：



