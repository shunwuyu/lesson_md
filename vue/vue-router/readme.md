[source](https://juejin.im/post/5b330142e51d4558b10a9cc5)

- Hash 路由
- History 路由

url 的 hash 是以 # 开头，原本是用来作为锚点，从而定位到页面的特定区域。当 hash 改变时，页面不会因此刷新，浏览器也不会向服务器发送请求。

- history.pushState 和 history.replaceState 来进行路由控制。通过这两个方法，可以实现改变 url 且不向服务器发送请求。同时不会像 hash 有一个 #，更加的美观。
但是 History 路由需要服务器的支持，并且需将所有的路由重定向到根页面。


