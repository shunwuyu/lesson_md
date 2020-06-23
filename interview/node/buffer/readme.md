- buffer 字符串 用 Buffer 怎么表达？
- buffer 如何编程字符串 toString
Buffer是node的核心模块, 利用它来处理二进制数据, 文件流的读写、网络请求数据的处理。

https://juejin.im/post/5b76e6a86fb9a019fe684018
两段代码
Queries-per-second  每秒查询率
QPS可以达到4019.70，传输率为40491.45KB每秒
使用Buffer，QPS达到7130.05，传输率为71822.74KB每秒。 性能是原来的177%，极大的节省了服务器资源 机器的性能经常用每秒查询率来衡量

在NodeJS中，进行http传输时，若返回的类型为string，则会将string类型的参数，转换为Buffer，通过NodeJS中的Stream流，一点点的返回给客户端。如果我们直接返回Buffer类型，就没有了转换操作，直接返回，减少了CPU的重复使用率。




