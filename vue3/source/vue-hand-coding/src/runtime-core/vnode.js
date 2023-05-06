import {ShapeFlags} from '../shared'

export function createVNode(type,props=null,children=null){
    // 一个虚拟dom主要的三个类型，element，text和component
    let shapeFlag = typeof type=='string'
        ? ShapeFlags.ELEMENT
        : type==Text 
            ? ShapeFlags.TEXT
            : typeof type=='function' || typeof type.render=='function'
                ? ShapeFlags.COMPONENT
                : 0
    if(typeof children==='string'){
        shapeFlag |= ShapeFlags.TEXT_CHILDREN
    } else if(Array.isArray(children)){
        shapeFlag |= ShapeFlags.ARRAY_CHILDREN
    }

    // console.log(shapeFlag, '||||||//////')
    const vnode = {
        type,
        shapeFlag,
        props: props || {},
        children,
        key: props?.key,
        el: null,
        component:null
    }
    // console.log(vnode, '????????????\\\\\\\\\\\\')
    return vnode
}

export const h = (type, props, children) => {
    //实际的h会对createVNode做对象 数组等情况的支持，支持更多类型的参数
    // mini的就直接调用了
    return createVNode(type, props, children)
}

export const Text = Symbol("VueText")

export function createTextVNode(text = "") {
  return createVNode(Text, {}, text)
}

export function isSameVNodeType(n1,n2){
  return n1.type === n2.type && n1.key === n2.key
}