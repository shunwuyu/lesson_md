## why
http 无状态的

## cookie
[source](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)
存本地
怎么来：
1. 用HTTP头向客户端发送cookies，
2. js document.cookie=

浏览器检查所有存储的cookie，把该cookie附在请求资源的HTTP请求头上发送给服务器。

内容：
name 
value 
path 路径
domain 域名
secure 安全 cookie 只会在 https 协议下传输
HttpOnly 如果这个属性设置为true，就不能通过js脚本来获取cookie的值
max-age 秒为单位 在几秒之后 cookie 被删除
`document.cookie='myname=456;path=/;domain=juejin.im;max-age=10';`

用途：状态管理，个性化设置（主题，设置），

作用范围：
path 与 domain 一起构成cookie的作用范围。

/ 所有路径
/aaa  只能在 aaa 路径下面 以及 aaa 路径下面
默认 /

## session
服务器端
用户访问的都是一个服务器，产生很多个 session 信息，cookie 又是存在各子的浏览器里面。两者需要关联。
