
[source](https://juejin.im/post/59c907d46fb9a00a4746e2db)

HTTP 响应中包含一个状态码，用来表示服务器对客户端响应的结果。
状态码一般由3位构成

1xx : 表示请求已经接受了，继续处理。
2xx : 表示请求已经处理掉了。
  200 OK 客户端请求成功。
3xx : 重定向。
  301 Moved Permanently 请求永久重定向。
  302 Moved Temporarily 请求临时重定向。
  304 Not Modified 文件未修改，可以直接使用缓存的文件。
4xx : 一般表示客户端有错误，请求无法实现。
  400 Bad Request 由于客户端请求有语法错误，不能被服务器所理解。
  401 Unauthorized 请求未经授权，无法访问。
  403 Forbidden 服务器收到请求，但是拒绝提供服务。服务器通常会在响应正文中给出不提供服务的原因。
  404 Not Found 请求的资源不存在，比如输入了错误的URL。
  500 Internal Server Error 服务器发生不可预期的错误，导致无法完成客户端的请求。
  503 Service Unavailable 服务器当前不能够处理客户端的请求，在一段时间之后，服务器可能会恢复正常。
5xx : 一般为服务器端的错误。

HTTP协议  req  response 
状态码:  HTTP响应（response）中包含状态码  
浏览器 代理 proxy  
1xx  请求正在处理， 继续等待
2xx  请求已经成功处理掉了   200  OK
3XX  重定向   Location 
4XX  用户出现的错误（地址错了） 未授权限 受限资源 404 not f ound   
5XX  服务器端出现错误 


301  永久跳转， 
用户  www.xiaomi.com    www.mi.com 
告诉蜘蛛  
www.xiaomi.com/a.html  红米手机 
废弃了， 301  www.mi.com/a.html 
3XX 区别，  永久跳转， 告诉蜘蛛把记录更新掉 
301 可以在改变状态码， 不变， 来展示理解 
http://localhost:3000  301 永久跳转， 
再次访问， 浏览器有缓存， 不需要再走服务器, 
302 临时跳转， 不会告知蜘蛛 或在前端缓存 

