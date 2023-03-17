(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueReactivity = {}));
})(this, (function (exports) { 'use strict';

    function effect(fn) {
        const effect = createReactiveEffect(fn); // 创建一个出来
        effect();
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
                activeEffect = null;
            }
        };

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

    function track(target, key) {
        // target 里面的key 记住activeEffect 
        let depsMap = targetMap.get(target);
        if (!depsMap) {
            targetMap.set(target, (depsMap=new Map()));
        }
        // 拿到了state对应的map
        let dep = depsMap.get(key);
        if (!dep) {
            // dep = new Set()
            // depsMap.set(key, dep)
            depsMap.set(key, (dep = new Set()));
        }
        // 去到了 Set[fn, fn, fn]
        dep.add(activeEffect);
        console.log(targetMap);
    }

    function trigger(target, key) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
            return
        }
        let dep = depsMap.get(key);
        if (!dep) {
            return
        }
        dep.forEach(effect => {
            effect && effect();
        });
    }

    const baseHandler = {
        // state.name
        get(target, key, receiver) {
            // Reflect 代替了Object 更安全
            // Object.hasOwnProperty('name')
            // Object.keys({a:1, b:2})
            let value = Reflect.get(target, key, receiver);
            console.log('获取值', target, key, receiver);
            // state.name 记住activeEffect 
            track(target, key);
            return value
        },
        set(target, key, newValue, receiver) {
            const oldValue = target[key];
            if (oldValue === newValue) {
                return
            }

            let result = Reflect.set(target, key, newValue, receiver);
            trigger(target, key);
            console.log('设置值set', target, key, newValue, receiver);
            
            return result
        }
    };

    function reactive(target) {
        // {}  baseHandler  Set Map  WeakMap  collectionHandlers
        // let proxy = new Proxy(target, baseHandler)
        // return proxy
        return createReactiveObject(target)
       
    }

    const reactiveMap = new Map();
    function createReactiveObject(target) {
        const existProxy = reactiveMap.get(target);
        if (existProxy) {
            return existProxy
        }
        let proxy = new Proxy(target, baseHandler);
        reactiveMap.set(target, proxy);
        return proxy
    }

    exports.effect = effect;
    exports.reactive = reactive;

}));
