const obj = { get a() { return this.b; } };
const proxy = new Proxy(obj, {
    get(target, key) {
        return target[key]
    }
})

console.log(Reflect.get(obj, "a")); // undefined
console.log(Reflect.get(obj, "a", { b: 2 }));