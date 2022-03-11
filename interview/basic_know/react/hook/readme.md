![](https://juejin.cn/post/6890738145671938062)

- 格式化数组 讲小写变大写 怎么做？
  复用
  1. utils 工具函数
  2. 自定义hooks

- 为什么大厂要问hooks? 你用过哪些ahooks? 你写过哪些hooks?  
  react api 
  复用 

- react-hooks 何时诞生？
  react16.8
- hooks 可以用来干嘛？
  项目中重复逻辑， 感觉很好，
  函数， 封装
- 什么是hooks?  
  钩子API，
  目的 代码的可复用性 逻辑性 
  弥补无状态组件没有生命周期 
  没有数据管理状态state的缺陷
  初衷
    把组件，颗粒化，单元化，形成独立的渲染环境，减少渲染次数，优化性能

- 为何要自定义hooks?  ahooks
  在react-hooks基础上的一个拓展，可以根据业务需要制定满足业务需要的hooks，
  更注重的是逻辑单元

- ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78400dbc2d54425aa0d37c2bf6f119f9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

  hooks 专注的就是逻辑复用
  我们的项目，不仅仅停留在组件复用的层面上
  hooks让我们可以将一段通用的逻辑存封起来。将我们需要它的时候，开箱即用即可。

1. 自定义hooks-通用模式
  ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c11c50afea3d4567af7fc8f424838d1c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

  传进去什么，返回什么

  hooks来格式化数组将小写转成大写

- 有什么优化的点？
  我们格式化父组件传递过来的list数组，并将小写变成大写，但是当我们点击add。 理想状态下数组不需要重新format，但是实际跟着执行format。无疑增加了性能开销  
  1. 条件限定-性能开销加进去
    useMemo
    所以一个好用的自定义hooks,一定要配合useMemo ,useCallback 等api一起使用

- ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8026e8ab20d402c9cdf778fe54f8023~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
  复用

- npx @tarojs/cli init myApp
  