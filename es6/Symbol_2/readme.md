[symbols](https://juejin.im/post/5a0e65c1f265da430702d6b9#heading-10)
Symbols 是新的原始类型（primitive）。就像是 Number、String、和 Boolean 一样。
Symbols 具有一个 Symbol 函数用于创建 Symbol。
与别的原始类型不同，Symbols 没有字面量语法（例如，String 有 ''）
类似构造函数而又非构造函数的 Symbol 函数：

Symbols 拥有内置的 debug 能力
Symbols 可以指定一个描述，这在 debug 时很有用，当我们能够输出更有用的信息到控制台时，我们的编程体验将更为友好：

Symbols 能被用作对象的 key   分配无限多的具有唯一性的 Symbols 到一个对象上，这些 key 保证不会和现有的字符串 key 冲突，或者和其他 Symbol key 冲突

Symbols 能够给对象提供一个隐藏层   全新的目的   属性不可迭代，也不能够通过现有的反射工具获得，并且能被保证不会和对象任何已有属性冲突

Symbols 是完全唯一的

在 JavaScript 引擎内部，就会创建一个全新的值

JavaScript 也有另一个创建 Symbol 的方式来轻易地实现 Symbol 的获得和重用：Symbol.for()。

Object.prototype.toString.call(

如果您在cookie中设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息，这样能有效的防止XSS攻击，具体一点的介绍请google进行搜索
[source](https://www.cnblogs.com/wxinyu/p/9154178.html)
- session
  session的中文翻译是“会话”，当用户打开某个web应用时，便与web服务器产生一次session。服务器使用session把用户的信息临时保存在了服务器上，用户离开网站后session会被销毁。
  用户信息存储方式相对cookie来说更安全，如果web服务器做了负载均衡，
- cookie
  cookie是保存在本地终端的数据。
  cookie由服务器生成，发送给浏览器，浏览器把cookie以kv形式保存到某个目录下的文本文件内，下一次请求同一网站时会把该cookie发送给服务器。由于cookie是存在客户端上的，所以浏览器加入了一些限制确保cookie不会被恶意使用，同时不会占据太多磁盘空间，所以每个域的cookie数量是有限的。
    cookie的组成有：名称(key)、值(value)、有效域(domain)、路径(域的路径，一般设置为全局:"\")、失效时间、安全标志(指定后，cookie只有在使用SSL连接时才发送到服务器(https))。下面是一个简单的js使用cookie的例子:
  用户登录时产生cookie:
- token
  token的意思是“令牌”，是用户身份的验证方式，最简单的token组成:uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign(签名，由token的前几位+盐以哈希算法压缩成一定长的十六进制字符串，可以防止恶意第三方拼接token请求服务器) 还可以把不变的参数也放进token，避免多次查库

cookie 和session的区别
1、cookie数据存放在客户的浏览器上，session数据放在服务器上。
2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
   考虑到安全应当使用session。
3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
   考虑到减轻服务器性能方面，应当使用COOKIE。
4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
5、所以个人建议：
   将登陆信息等重要信息存放为SESSION
   其他信息如果需要保留，可以放在COOKIE中

token 和session 的区别
 session 和 oauth token并不矛盾，作为身份认证 token安全性比session好，因为每个请求都有签名还能防止监听以及重放攻击，，如果你需要实现有状态的会话，仍然可以增加session来在服务器端保存一些状态

   Session 是一种HTTP存储机制，目的是为无状态的HTTP提供的持久机制。所谓Session 认证只是简单的把User 信息存储到Session 里，因为SID 的不可预测性，暂且认为是安全的。这是一种认证手段。 而Token ，如果指的是OAuth Token 或类似的机制的话，提供的是 认证 和 授权 ，认证是针对用户，授权是针对App 。其目的是让 某App有权利访问 某用户 的信息。这里的 Token是唯一的。不可以转移到其它 App上，也不可以转到其它 用户 上。 转过来说Session 。Session只提供一种简单的认证，即有此 SID，即认为有此 User的全部权利。是需要严格保密的，这个数据应该只保存在站方，不应该共享给其它网站或者第三方App。 所以简单来说，如果你的用户数据可能需要和第三方共享，或者允许第三方调用 API 接口，用 Token 。如果永远只是自己的网站，自己的 App，用什么就无所谓了。

   token就是令牌，比如你授权（登录）一个程序时，他就是个依据，判断你是否已经授权该软件；cookie就是写在客户端的一个txt文件，里面包括你登录信息之类的，这样你下次在登录某个网站，就会自动调用cookie自动登录用户名；session和cookie差不多，只是session是写在服务器端的文件，也需要在客户端写入cookie文件，但是文件里是你的浏览器编号.Session的状态是存储在服务器端，客户端只有session id；而Token的状态是存储在客户端。
