## http 
- 用于Web浏览器和Web服务器之间的通信，客户端打开一个连接以发出请求，然后等待它收到服务器端响应。
- 请求篇：
  1. 请求行：请求方法、请求地址 和 协议版本
  2. 请求头：可用于传递一些附加信息，格式为：键: 值
  3. 空行：\r\n
  4. 请求体：
     1. www-form-url-encoded: name=lihua&age=13
     2. json： {name:lihua, age:13}
     3. multipart/form-data: 内容是用 `boundary` 分段的
- 响应篇
  1. 响应行: 协议 状态码 响应信息
  2. 响应头：
  3. 响应体：正文内容