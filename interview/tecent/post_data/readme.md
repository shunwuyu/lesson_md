[source](https://juejin.cn/post/6844904100035821575#heading-36)

- 在 http 中，表单提交方式有哪几种? POST
  - application/x-www-form-urlencoded
    - 其中的数据会被编码成以&分隔的键值对
    - 字符以URL编码方式编码。
  - multipart/form-data
    请求头中的Content-Type字段会包含boundary
    且boundary的值有浏览器默认指定
    数据会分为多个部分，每两个部分之间通过分隔符来分隔，每部分表述均有 HTTP 头部描述子包体，如Content-Type，在最后的分隔符会加上--表示结束。
  
    在实际的场景中，对于图片等文件的上传，基本采用multipart/form-data而不用application/x-www-form-urlencoded，因为没有必要做 URL 编码，带来巨大耗时的同时也占用了更多的空间。