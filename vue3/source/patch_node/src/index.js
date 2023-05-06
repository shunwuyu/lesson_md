import { h } from './h'
import render from './render'

const prevVNode = h('div', null, '旧的 VNode')

class MyComponent {
  render() {
    return h('div', null, '新的 VNode')
  }
}
const nextVNode = h(MyComponent)

render(prevVNode, document.getElementById('app'))

render(nextVNode, document.getElementById('app'))
