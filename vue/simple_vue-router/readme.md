[source](https://juejin.im/post/5b35dcb5f265da59a117344d)

- 绑定 hashchange 事件，实现前端路由；
- 将传入的路由和组件做一个路由映射，切换哪个路由即可找到对应的组件显示；
- 需要 new 一个 Vue 实例还做响应式通信，当路由改变的时候，router-view 会响应更新；
- 注册 router-link 和 router-view 组件。