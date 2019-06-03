<<<<<<< HEAD
1. vue-router 是SPA（单页应用）的路径管理器
  webapp链接路径的管理组件
  SPA只能使用路由进行管理，a标签是不起作用的

2. npm install vue-router --save-dev

#内容顺序：
  1. helloWorld , look 导航切换
  2. 子路由配置，lookOne, lookTwo
  3. 路由传参，<router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>
  4. vue-router 利用url传递参数 <router-link to="/look/666">看</router-link>
  5. 编程式路由跳转（导航）
  6. 路由重定向
  7. 路由中的钩子函数
      beforeRouteEnter:(to,from,next)=>{
        console.log("准备进入路由模板");
        next();
      },
      beforeRouteLeave: (to, from, next) => {
        console.log("准备离开路由模板");
        next();
      }
=======
[source](https://juejin.im/post/5b330142e51d4558b10a9cc5)

- Hash 路由
- History 路由

url 的 hash 是以 # 开头，原本是用来作为锚点，从而定位到页面的特定区域。当 hash 改变时，页面不会因此刷新，浏览器也不会向服务器发送请求。

- history.pushState 和 history.replaceState 来进行路由控制。通过这两个方法，可以实现改变 url 且不向服务器发送请求。同时不会像 hash 有一个 #，更加的美观。
但是 History 路由需要服务器的支持，并且需将所有的路由重定向到根页面。


>>>>>>> a75761d720c40d53cb8e69da09c7511f15bbdde8
