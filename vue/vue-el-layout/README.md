## 
<template>
<div>
<slot></slot>
<elbutton></elbutton>
</div>
</template>

里面的东西 都会 被编译为 
h('div', {}, [children])
babel.io

h 函数的返回
一个对象
{
  详细描述了，该标签（<div/><component/>）上的信息：props, id, class 
  子节点
}
虚拟节点（virtual node） Vnode
虚拟 DOM ：Vnode 建立起来的一个树