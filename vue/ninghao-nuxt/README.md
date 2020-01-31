- create-react-app ninghao-nuxt
- 配置
- 路由
  posts/index.vue
  查看/.nuxt/router.js
  /hello   
- index.vue   ->  posts  刷新 
  a   universal app   not  SPA
  nuxt-link  不会刷新   SPA
  scoped   只在首页有效
- {{$route.params.id}}  /pages/_id.vue
  validate  404 正则
- 应用模板
  app.html
  {{ HEAD }}
  {{ APP }}
