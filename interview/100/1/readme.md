# [第 1 题：写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1)
  答案 key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度

[vue中的key](https://juejin.im/post/6844904053344829453)

- key会用在虚拟DOM算法（diff算法）中，用来辨别新旧节点。
- 不带key的时候会最大限度减少元素的变动，尽可能用相同元素。（就地复用）
- 带key的时候，会基于相同的key来进行排列。（相同的复用）
- 带key还能触发过渡效果，以及触发组件的生命周期

不带key 734  不带key的省略了销毁和创建dom的开销，只需要替换文本节点就ok了，
带key  1533  key的却需要进行patch流程 而且需要把能复用的那部分元素找出来，将不能复用的消除，并且重新创建新的dom元素
path ?   
为什么要戴key? 
1. 有组件时， 有自身状态的



