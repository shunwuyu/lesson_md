https://juejin.im/post/5ba48fc4e51d450e704277fa 之事无巨细手写koa源码

express适合开发较大的企业级应用，而koa致力于成为web开发中的基石，例如egg.js就是基于koa开发的。

koa提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序

koa的用法可以说非常傻瓜，我们快速过一下 `1.js`

koa多了两个实例上的use、listen方法，和use回调中的ctx、next两个参数。这四个不同，几乎就是koa的全部了，也是这四个不同让koa如此强大

listen
  http.createServer() 端口 
ctx  
  req,res对象合二为一 并进行了大量拓展,使开发者可以方便的使用更多属性和方法，大大减少了处理字符串、提取信息的时间，免去了许多引入第三方包的过程。(例如ctx.query、ctx.path等)
use
  koa的核心 —— 中间件（middleware）。解决了异步编程中回调地狱的问题，基于Promise，利用 洋葱模型 思想，使嵌套的、纠缠不清的代码变得清晰、明确，并且可拓展，可定制，借助许多第三方中间件，可以使精简的koa更加全能（例如koa-router，实现了路由）。其原理主要是一个极其精妙的 compose 函数。在使用时，用 next() 方法，从上一个中间件跳到下一个中间件。

4个文件 1800行代码

- 首先，梳理一下思路，原理无非就是use的时候拿到一个回调函数，listen的时候执行这个函数。
- 此外，use回调函数的参数ctx拓展了很多功能，这个ctx其实就是原生的req、res经过一系列处理产生的。
- 其实，第一句不准确，use可以多次，所以是多个回调函数，用户第二个参数next()跳到下一个，把多个use的回调函数按照规则顺序执行。
- 那么，看起来就很简单了，难点只有两个：一个是如何将原生req和res加工成ctx，另一个是如何实现中间件。
- 第一个，ctx其实就是一个上下文对象，request和response两个文件用来拓展属性，context文件实现代理，我们会手写相关源码。
- 第二个，源码中的中间件由一个中间件执行模块koa-compose实现，这里我们会手写一个

## application.js
  koa是一个类,实例上主要两个方法，use和listen
  listen是http的语法糖，所以要引入http模块

  
用户调用use方法时，把这个回调fn存起来，创建一个createContext函数用来创建上下文，创建一个handleRequest函数用来处理请求，用户listen时将handleRequest放进createServer回调中，在函数内调用fn并将上下文对象传入，用户就得到了ctx。


使用对象get访问器返回一个处理过的数据就可以将数据绑定到request上了，这里的问题是如何拿到数据，由于前面ctx.request这一步，所以this就是ctx，那this.req就是原生的req，再利用一些第三方模块对req进行处理就可以了，源码上拓展了非常多，这里只举例几个，看懂原理即可。

作者：rocYoung
链接：https://juejin.im/post/5ba48fc4e51d450e704277fa
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。