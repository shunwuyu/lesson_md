https://mp.weixin.qq.com/s?__biz=Mzg2NzA4MTkxNQ==&mid=2247487468&idx=1&sn=23fcf535f83d60d2ce6722d5313fcd23&chksm=ce404438f937cd2efdde4f17430205264858c971ee66d55dceb86872bcad3b69006a62126e9f&mpshare=1&scene=23&srcid=&sharer_sharetime=1589154745467&sharer_shareid=f6add546d865569509a0448d0a1e7b82#rd
- 204用来干嘛？
- 如何防止表单多次提交
- CSS  简写 Cross Site Scripting
- HttpOnly 如何理解？ 安全问题   XSS     
http   https  tcp   udp   arp   icmp    三次握手   四次挥手


DNS   Domain Name System  分布式网络目录服务，主要用于域名与 IP 地址的相互转换
先浏览器缓存查，没有则本地host文件查，没有就请求DNS服务器，主要是递归和迭代两种方式相结合
chrome://chrome-urls/ -> chrome://net-internals/#events

HTTP
  - 响应码
    200，301，302，304，404，503
    1XX：信息状态码，例如100表示到目前为止都很正常，客户端可以继续发送请求或者忽略这个响应
    2XX：成功状态码，例如200表OK，204表不包含实体;
    打个比方，如果一个表单提交后会跳到a.html，如果a.html的状态码是204，则页面就不会发生跳转，而是停留在当前页面。对于a标签而言，如果链接的响应码是204的话，页面也不会发生跳转。
    204---------
    3xx
    301 永久跳转 
    302临时重定向，HTTP1.0的状态码，HTTP1.1也有保留。
    www.baidu.com   https://www.baidu.com
    307临时重定向 请求的资源暂时地被移动到  Location 首部所指向的 URL 上
    当发送重定向请求的时候，307 状态码可以确保请求方法和消息主体不会发生变化。当响应状态码为 302 的时候，一些旧有的用户代理会错误地将请求方法转换为 GET：使用非 GET 请求方法而返回 302 状态码，Web 应用的运行状况是不可预测的；而返回 307 状态码时则是可预测的。对于 GET 请求来说，两种情况没有区别。

    304 Not Modified：如果不满足首部的一些条件则返回304
    Not Modified 客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。
    http://mmbiz.qpic.cn/mmbiz_png/b95QHPkcOMDWicSEJtOZnPibjZXayM9EkycCeAiaB8rAWOuZ6vqVG0UAMX8u7JVASLtjGIetkG48znOickwrtQnW8g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
    Last-Modified: Fri, 08 May 2020 23:21:14 GMT 
    If-Modified-Since: Fri, 08 May 2020 23:21:14 GMT
    Cache-Control: max-age=0
    max-age>0 时 直接从游览器缓存中 提取
    max-age<=0 时 向server 发送http 请求确认 ,该资源是否有修改
    有的话 返回200 ,无的话 返回304.
    404
      400 Bad Request：请求报文存在语法错误
      401 Unauthorized：表示发送的请求需要有认证信息
      403:请求被拒绝
      404：Not Found
    503
    503是一种HTTP状态码。英文名503 Service Unavailable与404（404 Not Found)是同属一种网页状态出错码
    前者是服务器出错的一种返回状态，后者是网页程序没有相关的结果后返回的一种状态，
    web服务器不能处理HTTP请求，可能是临时超载或者是服务器进行维护。

- 头部 
  Cache-Control  
    缓存控制 Pragma 和 Cache-Control
    Pragma的值为no-cache时，表示禁用缓存，Expires的值是一个GMT时间，表示该缓存的有效时间。
    expires: Thu, 14 May 2020 01:41:07 GMT

  请求  Host 

- 版本区别
  http1.0:不能长连接，只能短连接
  http1.1:一个TCP连接可以发送多个HTTP请求，不过服务器只能按照顺序一个一个响应。
  http2.0采用了多路复用，它把HTTP报文分解成更小的二进制帧来传送，不同的HTTP请求报文可以混合在一个TCP连接上传输，服务器收到后，在根据二进制帧里面存放的ID来进行分类

- 请求方法
  get，参数会显示在地址栏，不安全
  post，参数放在实体部分
  head:不返回实体部分，确认URL的有效性以及资源更新日期
  put: 上传文件
  patch：对部分资源进行修改
  delete
  option: 查询支持的方法

- 幂等性
  定义：同样的请求被执行一次与连续执行多次的效果是一样的，
  服务器的状态也是一样的
  幂等性——是系统的接口对外一种承诺（而不是实现），承诺只要调用接口成功，外部多次调用对系统的影响是一致的。
一个幂等的操作典型如：把编号为5的记录的A字段设置为0，这种操作不管执行多少次都是幂等的。
一个非幂等的操作典型如：把编号为5的记录的A字段增加1，这种操作显然就不是幂等的。
  get, head, put, delete 方法是幂等性的，而post不是。
  对于电商应用来说，服务器端收到 POST 请求，在操作成功后必须302跳转到另外一个页面，这样即使用户刷新页面，也不会重复提交表单。

缺点 
  明文传输，容易被窃听
  没有验证对方身份，容易遭到伪装
  无法证明报文(报文(message)是网络中交换与传输的数据单元，即站点一次性要发送的数据块)的完整性，容易被篡改

攻击
  跨站脚本攻击（也称为XSS）指利用网站漏洞从用户那里恶意盗取信息。
  动态站点会受到一种名为“跨站脚本攻击”（Cross Site Scripting, 而静态站点则完全不受其影响。
  随着AJAX（Asynchronous JavaScript and XML，异步JavaScript和XML）技术的普遍应用， 关闭JavaScript
  https://www.cnblogs.com/eco-just/p/9484905.html
  字符编码，字符转义

  SQL注入
  OS命令攻击
