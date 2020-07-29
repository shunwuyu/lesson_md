import { h, init } from 'snabbdom'
// init 方法用来创建 patch 函数
const patch = init([])

const MyComponent = props => {
  return h('h1', props.title)
}

// 组件的产出是 VNode
const prevVnode = MyComponent({ title: 'prev' })
// 将 VNode 渲染成真实 DOM
console.log(patch(document.getElementById('app'), prevVnode))

// 两秒之后重渲染
setTimeout(() => {
  // 数据变更，产出新的 VNode
  const nextVnode = MyComponent({ title: 'prev' })
  // 通过对比新旧 VNode，高效的渲染真实 DOM
  // console.log(patch(prevVnode, nextVnode));
}, 2000)
