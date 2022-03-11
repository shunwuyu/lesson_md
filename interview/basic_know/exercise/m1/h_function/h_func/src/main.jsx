export const Fragment = Symbol()
export const VNodeFlags = {
  // html标签
  ELEMENT_HTML: 1,  // 0000 0000 0000 0001
  // SVG
  ELEMENT_SVG: 1 << 1,  // 0000 0000 0000 0010
  // 普通有状态的组件
  COMPONENT_STATEFUL_NORMAL: 1 << 2,  // 0000 0000 0000 0100
  // 需要被keepAlive的有状态的组件
  COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE: 1 << 3,  // 0000 0000 0000 1000
  // 已经被keepAlive的有状态组件
  COMPONENT_STATEFUL_KEPT_ALIVE: 1 << 4,  // 0000 0000 0001 0000
  // 函数式组件
  COMPONENT_FUNCTIONAL: 1 << 5,  // 0000 0000 0010 0000
  // 纯文本
  TEXT: 1 << 6,  // 0000 0000 0100 0000
  // Fragment
  FRAGMENT: 1 << 7,  // 0000 0000 1000 0000
  // Portal
  PORTAL: 1 << 8,  // 0000 0001 0000 0000
}
function h(tag, data = null, children = null) {
  let flags = null;
  
  if (typeof tag === 'string') {
    // svg 处理不一样
    flags = tag === 'svg' ? VNodeFlags.ELEMENT_SVG : VNodeFlags.ELEMENT_HTML
  } else if (tag === Fragment) {
    flags = VNodeFlags.FRAGMENT
  }

  // Fragment 类型的 VNode tag 属性值为 null 但是纯文本类型的 VNode 其 tag 属性值也是 null
  // 所以为了区分，我们可以增加一个唯一的标识
  // 当 h 函数的第一个参数(tag)的值等于该标识的时候，则意味着创建的是 Fragment 类型的 VNode：

  return {
      _isVNode: true, //始终为true
      flags: VNodeFlags.ELEMENT_HTML, // tags 标签特征 组件
      tag: 'h1',
      data: null,
      children: null,
      childFlags: ChildrenFlags.NO_CHILDREN,
      el: null
  }
}

h(Fragment, null, [])