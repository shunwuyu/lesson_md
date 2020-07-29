import { h, Fragment, Portal } from './h';
import render from './render'

// const fragmentVNode = h(Fragment, null, [h('h1'), h('h1')])
// console.log(fragmentVNode)

const elementVNode = h(
  'div',
  {
    style: {
      height: '100px',
      width: '100px',
      background: 'red'
    }
  },
  h(Portal, { target: '#portal-box' }, [
    h('span', null, '我是标题1......'),
    h('span', null, '我是标题2......')
  ])
)

// console.log(elementVNode)

render(elementVNode, document.getElementById('app'))
// class MyComponent {
//   render() {
//     return h(
//       'div',
//       {
//         style: {
//           background: 'green'
//         }
//       },
//       [
//         h('span', null, '我是组件的标题1......'),
//         h('span', null, '我是组件的标题2......')
//       ]
//     )
//   }
// }

// const compVnode = h(MyComponent)
// render(compVnode, document.getElementById('app'))
// 函数式组件挂载
// function MyFunctionalComponent() {
//   // 返回要渲染的内容描述，即 VNode
//   return h(
//     'div',
//     {
//       style: {
//         background: 'green'
//       }
//     },
//     [
//       h('span', null, '我是组件的标题1......'),
//       h('span', null, '我是组件的标题2......')
//     ]
//   )
// }



// const compVnode = h(MyFunctionalComponent)
// console.log(compVnode)

// // 旧的 VNode
// const prevVNode = h('div', null, [
//   h('p', null, '旧的子节点1'),
//   h('p', null, '旧的子节点2')
// ]);

// // 新的 VNode
// const nextVNode = h('div', null, [
//   h('p', null, '新的子节点1'),
//   h('p', null, '新的子节点2'),
//   h('p', null, '新的子节点3')
// ])



