import { h, Fragment, Portal } from './h'
import { Component } from './component'

const elementVNode = h('div', null, h('span'))
console.log(elementVNode)


// const elementWithTextVNode = h('div', null, '我是文本')
// console.log(elementWithTextVNode)

// const fragmentVNode = h(Fragment, null, [h('h1'), h('h1')])
// console.log(fragmentVNode)

// const portalVNode = h(
//   Portal,
//   {
//     target: '#box'
//   },
//   h('h1')
// )
// console.log(portalVNode)

// // 一个函数式组件
// function MyFunctionalComponent() {}
// // 传递给 h 函数的第一个参数就是组件函数本身
// const functionalComponentVNode = h(MyFunctionalComponent, null, h('div'))
// console.log(functionalComponentVNode)

// // 有状态组件
// class MyStatefulComponent extends Component {}
// const statefulComponentVNode = h(MyStatefulComponent, null, h('div'))
// console.log(JSON.stringify(statefulComponentVNode))

// const a = {
//   _isVNode: true,
//   flags: 4,
//   data: null,
//   children: {
//     _isVNode: true,
//     flags: 1,
//     tag: 'div',
//     data: null,
//     children: null,
//     childFlags: 1
//   },
//   childFlags: 2
// }
