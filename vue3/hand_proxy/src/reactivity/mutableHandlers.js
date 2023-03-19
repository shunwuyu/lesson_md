import { track, trigger } from './effect'
export const baseHandler = {
    // state.name
    get(target, key, receiver) {
        // Reflect 代替了Object 更安全
        // Object.hasOwnProperty('name')
        // Object.keys({a:1, b:2})
        let value = Reflect.get(target, key, receiver)
        console.log('获取值', target, key, receiver)
        // state.name 记住activeEffect 
        track(target, key)
        return value
    },
    set(target, key, newValue, receiver) {
        const oldValue = target[key]
        if (oldValue === newValue) {
            return
        }

        let result = Reflect.set(target, key, newValue, receiver)
        trigger(target, key)
        console.log('设置值set', target, key, newValue, receiver)
        
        return result
    }
}