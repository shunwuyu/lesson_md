const targetMap = new WeakMap()
let activeEffect = null

export function effect(fn) {
    const effectFn = () => {
        try {
            activeEffect = effectFn
            //fn执行的时候，内部读取响应式数据的时候，就能在get配置里读取到activeEffect
            return fn()
          } finally {
            activeEffect = null
          }
    }
    console.log(effectFn)
    return effectFn
}

export function track(target, type, key) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      // 初始化 depsMap 的逻辑
      // depsMap = new Map()
      // targetMap.set(target, depsMap)
      // 上面两行可以简写成下面的
      targetMap.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
      deps = new Set()
    }
    if (!deps.has(activeEffect) && activeEffect) {
      // 防止重复注册
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
        effectFn()
    })
}