[source](https://juejin.cn/post/7160903485994008583)

- HTTP 是一种无状态协议
    客户获得一张网页之后关闭浏览器，然后再一次启动浏览器，再登录该网站，但是服务器并不知道客户关闭了一次浏览器。
    无状态服务器是指一种把每个请求作为与之前任何请求都无关的独立的事务的服务器。
    无状态的设计简化了服务器端的设计，不必动态分配存储空间以处理进行中的会话。如果客户端在事务处理中间被中断了，系统不必为清理服务器状态而作出响应。
    缺陷是有时候在每个请求时包括附加的信息是必要的，这些额外信息需要服务器来解释。

    HTTP服务器就是一个例子。以URL形式提交的客户端请求可能包含cookies等带状态的数据，这些数据完全指定了所需的文档，而不需要其他之前请求的上下文或内存。

    
1,2,3,4,5,6,7
7 6 5 4 3 2 1