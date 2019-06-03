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