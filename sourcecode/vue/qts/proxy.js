// 使用Proxy，你可以将一只猫伪装成一只老虎。

// 包括运算符重载，对象模拟，简洁而灵活的API创建，对象变化事件，甚至Vue 3背后的内部响应系统提供动力


let target = {    x: 10,    y: 20};
let hanler = {    get: (obj, prop) => 42};
target = new Proxy(target, hanler);
// console.log(target.x);
// console.log(Reflect.get(target, 'x')) //为操作对象而提供的新API