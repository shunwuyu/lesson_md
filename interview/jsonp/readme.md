[source](https://juejin.im/post/5df6ed55518825122a2ac312)

- jsonp功能介绍， 为什么需要它？option请求知道吗？用在什么时候

跨域 JSONP 手写

浏览器的同源策略
协议 主机（域名相同，二级域名和主域名也算不同），端口相同，那么认为这两个页面属于同源。

跨域请求 跨域的读(read)请求
安全功能
  
跨域嵌入请求并没有限制
<img>  src
<script> src
link iframe

JSON + Padding   JSON 值给 填充(padding)进入一个回调函数内, 我们那得到的回调函数的参数就是我们请求到的数据
兼容性好， 
只支持发GET

CORS
  跨域资源共享(Cross-Origin Resource Sharing)
  是一种机制，它通过使用HTTP请求头来告诉浏览器允许一个web进行跨域资源请求。
  简单请求和非简单请求

  GET/HEAD/POST
  Accept Accept-Language Content-Language Content-Type
  Origin  Access-Control-Allow-Origin   *  如果设置为*我们则无法携带Cookie

非简单请求
  options  预检请求
  Access-Control-Request-Method: POST 告诉服务器 实际的请求会使用POST方法。
  ccess-Control-Request-Headers: X-PINGOTHER, Content-Type 告诉服务器携带了哪些自定义首部字段。
  Access-Control-Allow-Origin 可接受的跨域请求源
  Access-Control-Allow-Methods 可接受的跨域请求方法
  Access-Control-Allow-Headers 可接受的自定义请求头字段

Nginx代理转发 http-proxy postMessage


规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。
PUT/DELETE/PATCH/
