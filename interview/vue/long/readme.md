[source](https://juejin.cn/post/6844903982742110216#heading-2)

- 数据很多 怎么展示？
    分页
- 长列表
- 时间分片  
    requestAnimationFrame
    列表项的DOM结构
    在 JS 的Event Loop中，当JS引擎所管理的执行栈中的事件以及所有微任务事件全部执行完后，才会触发渲染线程对页面进行渲染
    第一个console.log的触发时间是在页面进行渲染之前，此时得到的间隔时间为JS运行所需要的时间
    第二个console.log是放到 setTimeout 中的，它的触发时间是在渲染完成，在下一次Event Loop中执行的


