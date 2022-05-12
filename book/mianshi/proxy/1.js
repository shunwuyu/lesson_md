const obj={ // 被代理对象
    name:'_island',
    score: 59
    // score: 99
}
// const objProxy=new Proxy(obj,{});
// console.log(objProxy);

// 我们在其对象内定义一个get捕获器，用于监听获取对象值的操作
// 代理obj这个对象，并传入get捕获器
const objProxy = new Proxy(obj, {
    // get捕获器
    get: function (target, key) {
        console.log(`捕获到对象获取${key}属性的值操作`);
        return target[key];
    },
    // 在objProxy对象的拦截器中新增一个捕获器set，
    // 用于监听对象的某个属性被设置时触发。
    set: function (target, key, val) {
        console.log(`捕获到对象设置${key}属性的值操作,新值为${val}`);
        target[key] = val;
    },
    // 有什么用？ age  类型
    // set: function (target, key, val) {
    //     if (key==='age' && typeof val === "number") {
    //         target[key] = val;
    //     } else {
    //         throw new TypeError("该属性的值必须是Number类型");
    //     }
    // },
    getPrototypeOf: function (target) {
        console.log(`监听到对象getPrototypeOf操作`);
        return target
    },
    has(target, prop) {
        if (prop === 'score' && target[prop] < 60) {
            console.log(`${target.name} 不及格`);
            return false;
        }
        return prop in target;
    }
});
// 通过代理对象操作obj对象  
console.log(objProxy.name);
objProxy.name = "QC2125"
// 捕获到对象获取name属性的值操作
// _island
// objProxy.age = '杨子';
console.log(Object.getPrototypeOf(objProxy) === obj);
  
console.log('score' in objProxy)