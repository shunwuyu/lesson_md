import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

function render(vdom) {
  // console.log(vdom);
  // 如果是字符串或者数字，创建一个文本节点
  if (typeof vdom === 'string' || typeof vdom === 'number') {
    return document.createTextNode(vdom)
  }
  const { type, props } = vdom
  // console.log(vdom)
  // 创建真实DOM
  const element = document.createElement(type)
  // 设置属性
  setProps(element, props)
  // 遍历子节点，并获取创建真实DOM，插入到当前节点
  // console.log(children);
  if (typeof props.children === 'string') {
    element.appendChild(document.createTextNode(props.children))
  } else if (Array.isArray(props.children)) {
    props.children
    .map(render)
    .forEach(element.appendChild.bind(element))
  }
  
  console.log(element)
  // 虚拟 DOM 中缓存真实 DOM 节点
  // vdom.dom = element;
  
  // 返回 DOM 节点
  return element
}


class Component {
  vdom = null // 组件的虚拟DOM表示
  $el  = null // 虚拟DOM生成的真实节点

  state = {
    text: 'Initialize the Component'
  }
  
  render() {
    const { text } = this.state
    return (
      <div>{ text }</div>
    )
  }
}

function setProps (element, props) {
  Object.entries(props).forEach(([key, value]) => {
    setProp(element, key, value)
  })
}

function setProp (element, key, vlaue) {
  element.setAttribute(
    // className使用class代替
    key === 'className' ? 'class' : key,
    vlaue
  )
}

function createElement (app, component) {
  const vdom = component.render()
  console.log(vdom, '///')
  component.vdom = vdom
  component.$el = render(vdom) // 将虚拟 DOM 转换为真实 DOM
  app.appendChild(component.$el)
}

const app = document.getElementById('root')
const component = new Component
createElement(app, component)