let renderer
import { createRenderer } from "../runtime-core"
export * from '../runtime-core'

function ensureRenderer() {
    // 缓存
    return (
      renderer ||
      (renderer = createRenderer(nodeOps))
    )
}

const nodeOps = {
  insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null)
  },
  createElement(type) {
    return document.createElement(type)
  },
  createText(text) {
    return document.createTextNode(text)
  },
  setText(node, text) {
    node.nodeValue = text
  },
  setElementText(el, text) {
    el.textContent = text
  },
  parentNode: node => node.parentNode,
  querySelector: selector => doc.querySelector(selector),
}

export const createApp = (...args) => {
    // console.log(args)
    return ensureRenderer().createApp(...args)
}