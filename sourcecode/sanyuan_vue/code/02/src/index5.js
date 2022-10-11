class MyComponent {
  render() {
    // render 函数产出 VNode
    return {
      tag: 'div'
    }
  }
}

// VNode
const componentVnode = {
  tag: MyComponent
}

// 渲染
render(componentVnode, document.getElementById('app'))

function render(vnode, container) {
  // console.log(vnode)
  if (typeof vnode.tag === 'string') {
    // html 标签
    mountElement(vnode, container)
  } else {
    // 组件
    mountComponent(vnode, container)
  }
}

function mountComponent(vnode, container) {
  // 创建组件实例
  const instance = new vnode.tag()
  
  // 渲染
  instance.$vnode = instance.render()
  // console.log(instance.$vnode);
  // 挂载
  mountElement(instance.$vnode, container)
}

function mountElement(vnode, container) {
  // 创建元素
  const el = document.createElement(vnode.tag)
  console.log(el);
  // 将元素添加到容器
  container.appendChild(el)
}
