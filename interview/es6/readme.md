[source](https://juejin.cn/book/6844733763675488269/section/6844733763759374344)

Map、WeakMap、Object 区别   
Map WeakMap 新增的数据结构
key 的类型方面有一些区别

Object  key  string, Map key 可以是任意类型， WeakMap 的 key 只能为 object 类型
并且该对象为弱引用

- 何时使用Map代替Object
    - Object的key无法支持该数据时
    - 需要了解对象大小时
    - 不想存在冲突的key值时
    - 自定义key值时
WeakMap  深拷贝中的循环引用问题