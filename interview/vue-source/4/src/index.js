import { h } from './h'
import render from './render'

// 旧的 VNode
const prevVNode = h('div', null, [
  h('p', null, '旧的子节点1'),
  h('p', null, '旧的子节点2')
])

// 新的 VNode
const nextVNode = h('div', null, [
  h('p', null, '新的子节点1'),
  h('p', null, '新的子节点2'),
  h('p', null, '新的子节点3')
])

render(prevVNode, document.getElementById('app'))

// 2秒后更新
setTimeout(() => {
  render(nextVNode, document.getElementById('app'))
}, 2000)
