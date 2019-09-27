https://juejin.im/post/5d15be07e51d4556be5b3a9c
- Vue的插件是一个对象, 就像Element.
- 插件对象必须有install字段.
- install字段是一个函数.
- 初始化插件对象需要通过Vue.use()

1. Vue.use()调用必须在new Vue之前.
2. 同一个插件多次使用Vue.use()也只会被运行一次.