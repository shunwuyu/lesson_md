let obj = { a: 1 }

let onWatch = (obj, setBind, getLogger) => {
    let handler = {
        get(target, property) {
            getLogger(target, property)
            return target['property'];
        },
        set(target, property, value) {
            setBind(value, property)
            target[property] = value
        }
    }
    return new Proxy(obj, handler)
}

let p = onWatch(
    obj,
    (v, property) => {
        console.log(`监听到属性${property}改变为${v}`)
    },
    (target, property) => {
        console.log(`'${property}' = ${target[property]}`)
    }
);

p.a  // 监听到属性a改变
p.a = 2;

// 我们通过自定义 set 和 get 函数的方式，
// 在原本的逻辑中插入了我们的函数逻辑，
// 实现了在对对象任何属性进行读写时发出通知