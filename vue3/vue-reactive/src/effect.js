const targetMap = new WeakMap()
let activeEffect = null

export function track(target, type, key) {
    // console.log(`触发 track -> target: ${target} type:${type} key:${key}`)
    // 1. 先基于 target 找到对应的 dep
    let depsMap = targetMap.get(target)
    // console.log(depsMap, '-------------');
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
        // console.log(depsMap)
    }
    let deps = depsMap.get(key) // 某个KEY
    // console.log(key, '/////')
    if (!deps) {
        deps = new Set() // 不重复
    }
    if (!deps.has(activeEffect) && activeEffect) {
        deps.add(activeEffect)
    }
    depsMap.set(key, deps)
}

export function trigger(target, type, key) {
    const depsMap = targetMap.get(target)
    if (!depsMap) {
        // 没找到依赖
        return
    }
    const deps = depsMap.get(key)
    if (!deps) {
        return
    }
    deps.forEach((effectFn) => {
        // console.log(effectFn, '///')
        // if (effectFn.scheduler) {
        //     effectFn.scheduler()
        // } else {
            effectFn()
        // }
    })
}

export function effect(fn, options = {}) {
    const effectFn = () => {
        try {
            activeEffect = effectFn
            return fn()
        } finally {
            activeEffect = null
        }
    }

    if (!options.lazy) { //没有配置lazy 直接执行 
        effectFn() 
    }

    // effectFn.scheduler = options.scheduler
    return effectFn
}