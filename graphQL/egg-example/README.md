https://juejin.cn/book/6844733825164148744/section/6844733825210122247

- npm init egg --type=ts
- @switchdog/egg-graphql  支持typescript graphql
- 开启插件
config/plugin.ts
  ```
  graphql: {
    enable: true,
    package: '@switchdog/egg-graphql',
  },
  ```
  /config/config.default.ts
  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    apolloServerOptions: {
      tracing: true, // 设置为true时，以Apollo跟踪格式收集和公开跟踪数据
      debug: true, // 一个布尔值，如果发生执行错误，它将打印其他调试日志记录
    },
  };

  - config.middleware = [ 'graphql' ];
  /graphql的请求都会触发 GraphQL Schema 的查询

  - 安装 egg-cors
    npm i egg-cors --save

  - /config/plugin.ts：
  cors: {
    enable: true,
    package: 'egg-cors',
  },

  - /config/config.default.ts
    config.cors = {
    origin: '*', 
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH', 
  };

  - CSRF
  /config/config.default.ts
    config.security = {
    csrf: {
      ignore: () => true,
    },
};
- {
 hellos {
  id,
  name
}
}

- https://juejin.cn/book/6844733825164148744/section/6844733825210138631 
  ![](https://user-gold-cdn.xitu.io/2020/2/28/1708a75466a5aa41?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



# egg-sequelize
  