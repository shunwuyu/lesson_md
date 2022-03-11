![](https://juejin.cn/post/6844903502813085709)

- 何为MVVM?
  1. Model-View-ViewModel
  2. 将View与Model层分隔开
    MVC  M V 分开 由Controller调度
  3. 用ViewModel层将Model层的数据经过一定的处理变成适用于View层的数据结构并传送到View层渲染界面
  4. View层的视图更新也会告知ViewModel层，然后ViewModel层再更新Model层的数据

- 学生信息的代码
  demo1/index.html

- 如何优化？
  Do not Repeat Yourself
  createListItem 
  main.html

- 还可以优化吗？
  ，调用了三遍createListItem 这里显然还有精简的空间
  other.html
  MVVM风格的影子?

  student对象是原始数据 相当于Model层
  createList dom树，相当于View层
  那么ViewModel层呢 
  传给createList函数的参数就是Model的数据的改造，为了让Model的数据符合View的结构，我们做了这样的改造，因此虽然这段函数里面没有独立的ViewModel层

- 独立出ViewModel
  1.html

- 学生的身高的单位可以在m和cm之间切换呢
  