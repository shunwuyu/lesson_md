import { track, trigger } from "./effect"
import { isObject } from "./utils"

const get = createGetter();
const set = createSetter()

function createGetter(shallow = false) {
    return function get(target, key, receiver) {
        // console.log( receiver, '......')
        const res = Reflect.get(target, key, receiver)
        track(target, "get", key);
        // console.log(res, '//////')
        if (isObject(res)) {
            return shallow ? res : reactive(res)
        }
        return res
    }
}

function createSetter() {
    return function(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver)
        // trigger(target)
        trigger(target, "set", key)
        return result
    }
}

export const mutableHandlers = {
    get,
    set
}