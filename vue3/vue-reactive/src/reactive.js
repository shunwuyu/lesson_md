import {
    mutableHandlers
} from './baseHandlers'

export const reactiveMap = new WeakMap()

export function reactive(target) {
    if (typeof target !== 'object') {
        console.warn(`reactive ${target} 必须是一个对象`)
        return target
    }
    return new Proxy(target, mutableHandlers);
    // return createReactiveObject(target, reactiveMap, mutableHandlers)
}