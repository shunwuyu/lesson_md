# 渲染器的核心 Diff 算法

## 减小DOM操作的性能开销

![](http://hcysun.me/vue-design/assets/img/patch-children-3.06453ea2.png)

只有当新旧子节点的类型都是多个子节点时，核心 Diff 算法才派得上用场

patch
简单 Diff 算法

VNodeData children 