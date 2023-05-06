import { h } from './h'
import render from './render'
// console.log('////')
// 旧的 VNode
const prevVNode = h('div', null, [
    h('p', { key: 'a' }, '节点1'),
    h('p', { key: 'b' }, '节点2'),
    h('p', { key: 'c' }, '节点3')
  ])

  
  // 新的 VNode
  const nextVNode = h('div', null, [
    h('p', { key: 'c' }, '节点3'),
    h('p', { key: 'a' }, '节点1'),
    h('p', { key: 'b' }, '节点2')
  ])

render(prevVNode, document.getElementById('app'))

// 2秒后更新
setTimeout(() => {
  render(nextVNode, document.getElementById('app'))
}, 2000)