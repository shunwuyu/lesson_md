import { createAppAPI } from './apiCreateApp'
import {ShapeFlags} from '../shared'

export function createRenderer(options) {
    // console.log(options, '---')
    const {
        createElement: hostCreateElement,
        setElementText: hostSetElementText,
        insert: hostInsert,
    } = options
    
    // n1和n2是新老虚拟dom元素
    function patch(n1, n2, container) {
        if(n1==n2){
            return 
        }
        const { type, shapeFlag } = n2
        switch (type) {
            default:
                if (shapeFlag & ShapeFlags.ELEMENT) {
                    processElement(n1, n2, container)
                    // console.log('////////////////|||||||||||||||')
                } else if (shapeFlag & ShapeFlags.COMPONENT) {
                    processComponent(n1, n2, container)
                }
        }
    }

    function mountComponent(vnode, container) {
        // 创建组件实例，其实就是个对象，包含组件的各种属性
        const instance = vnode.component = {
            vnode,
            type:vnode.type,
            props:vnode.props,
        }
        // console.log(instance, '---------------111')
        setupComponent(instance)
        setupRenderEffect(instance, container)
    }

    function setupRenderEffect(instance,container) { 
        const {vnode} = instance
        const { type: Component } = vnode;
        // console.log(Component, '???????????????')
        let a = Component.render()
        patch(null, a, container)
    }

    function updateComponent(n1,n2,container) { 
    
    }

    function processComponent(n1, n2, container) {
        if (!n1) {
            // 初始化 component
            mountComponent(n2, container)
        } else {
            updateComponent(n1, n2, container)
        }
    }

    

    function render(vnode, container) {
        // console.log(vnode, container, '//////////////////')
        const prevVNode = container._vnode
        // console.log(prevVNode, '////???????||||||||||||||||||||')
        if (vnode == null) {
            // if (preVNode) {
                
            // }
        }  else {
            patch(container._vnode || null, vnode, container)
        }
        container._vnode = vnode
    }

    function setupComponent(instance) {
        const { props, children } = instance.vnode
        const component = instance.type
        
    }

    return {
        createApp: createAppAPI(render)
    }

    function processElement(n1, n2, container, anchor) {
        if (!n1) {
          mountElement(n2, container, anchor)
        } else {
          // todo
        //   updateElement(n1, n2, container, anchor)
        }
    }
    function mountElement(vnode, container, anchor) {
        const { shapeFlag, props, children, type } = vnode
        let el = vnode.el = hostCreateElement(type)
       
        // 支持单子组件和多子组件的创建
        if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
            console.log(el, '?????????????????????????????')
          // 子元素是childern
          hostSetElementText(vnode.el, children)
        } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
          // 是一个数组，比如多个div元素
        //   mountChildren(vnode.children, el)
        }
        
        // 新增props
        // if (props) {
        //   for (const key in props) {
        //     const nextVal = props[key]
        //     hostPatchProp(el, key, null, nextVal)
        //   }
        // }
        hostInsert(vnode.el, container, anchor)
    
    }
}

