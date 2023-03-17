export function effect(fn) {
    const effect = createReactiveEffect(fn); // 创建一个出来
    effect()
}
/**
 * 
 * fn: () => {  app.innerHTML = state.name} 
 */
let activeEffect;
function createReactiveEffect(fn) {
    // const effect = function reactiveEffect() {
    //     fn();
    // }
    const effect = function reactiveEffect() {
        // state.name 记住fn 
        activeEffect = fn;
        try {
            fn();
        } finally {
            activeEffect = null
        }
    }

    return effect
}
/**
 * 最外层 weakMap
 * {
 *  key是对象， 值是map
 *  state: {
 *         用到了state.name 的函数
 *      name: Set[fn, fn],
 *      age: Set[fn, fn]
 * }
 * }
 */
const targetMap = new WeakMap();  // key 只能是对象， 不会内存泄露

export function track(target, key) {
    // target 里面的key 记住activeEffect 
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        targetMap.set(target, (depsMap=new Map()))
    }
    // 拿到了state对应的map
    let dep = depsMap.get(key)
    if (!dep) {
        // dep = new Set()
        // depsMap.set(key, dep)
        depsMap.set(key, (dep = new Set()))
    }
    // 去到了 Set[fn, fn, fn]
    dep.add(activeEffect)
    console.log(targetMap)
}

export function trigger(target, key) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        return
    }
    let dep = depsMap.get(key)
    if (!dep) {
        return
    }
    dep.forEach(effect => {
        effect && effect()
    })
}