[source](https://www.overtaking.top/2018/09/06/20180906170854/)
[source](https://www.jianshu.com/p/c76d9ffd7899)

如果你已经使用 Koa 对 “洋葱模型” 这个词一定不陌生，它就是 Koa 中间件的一种串行机制，并且是支持异步的，下面是一个表达 “洋葱模型” 的经典案例。
!()[https://segmentfault.com/img/bV6DZG?w=478&h=435]
pylons App 压入应用
routes M  路由中间件
session M  会话中间件
cache middleware 缓存中间件
error Handler 错误处理
status code redirect  跳转
注册控制器
串行机制，并且是支持异步，这样就形成了洋葱式模型
![](https://upload-images.jianshu.io/upload_images/15804534-c24dcae3d47774bf.png?imageMogr2/auto-orient/strip|imageView2/2/w/900/format/webp)

递归