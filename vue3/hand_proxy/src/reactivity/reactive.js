import { baseHandler} from './mutableHandlers'
export function reactive(target) {
    // {}  baseHandler  Set Map  WeakMap  collectionHandlers
    // let proxy = new Proxy(target, baseHandler)
    // return proxy
    return createReactiveObject(target)
   
}

const reactiveMap = new Map()
function createReactiveObject(target) {
    const existProxy = reactiveMap.get(target)
    if (existProxy) {
        return existProxy
    }
    let proxy = new Proxy(target, baseHandler)
    reactiveMap.set(target, proxy)
    return proxy
}