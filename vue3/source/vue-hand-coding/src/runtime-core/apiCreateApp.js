import { createVNode } from "./vnode"

export function createAppAPI(render) {
    return function createApp(rootComponent) {
        const app = {
            _component: rootComponent,
            mount(rootContainer) {
                const vnode = createVNode(rootComponent)
                // console.log(vnode, '-----?????')
                render(vnode, rootContainer)
            },
            use(plugin,options){
            },
            component(name,component){
            }
        }
        return app
    }
}