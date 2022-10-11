[source](http://ghmagical.com/article/page/id/AASiankfBJWp)

- 实例化XMLHttpRequest对象
- 连接服务器
- 发送请求
- 接收响应数据

JSONP的请求过程：
请求阶段：浏览器创建一个 script 标签，并给其src 赋值(类似 http://example.com/api/?callback=jsonpCallback）。
发送请求：当给script的src赋值时，浏览器就会发起一个请求。
数据响应：服务端将要返回的数据作为参数和函数名称拼接在一起(格式类似”jsonpCallback({name: 'abc'})”)返回。当浏览器接收到了响应数据，由于发起请求的是 script，所以相当于直接调用 jsonpCallback 方法，并且传入了一个参数。
