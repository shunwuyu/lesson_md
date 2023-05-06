[source](https://time.geekbang.org/column/article/471006)444

- vue 核心流程
    首次渲染
    数据更新后的渲染

- 项目初始的渲染入口
    createApp 就是项目的初始化渲染入口
    想要启动一个 Vue 项目，只需要从 Vue 中引入 createApp，传入 App 组件，并且调用 createApp 返回的 App 实例的 mount 方法，就实现了项目的启动
