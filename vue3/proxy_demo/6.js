// [[Get]] [[Set]]  [[HasProperty]] [[Delete]] [[Call]]  [[Construct]] 
// [[GetPrototypeOf]]  
let target = {};
let proxy = new Proxy(target, {}); // 空的handler对象

proxy.test = 5; // 写入 Proxy 对象 (1)
console.log(target.test); // 返回 5，test属性出现在了 target 上！

console.log(proxy.test); // 还是 5，我们也可以从 proxy 对象读取它 (2)
// 我们可以看到，没有任何钩子，proxy 是一个 target 的透明包装.
for(let key in proxy) console.log(key); 

// Reflect 是一个内置对象，可简化的创建 Proxy。
let user = {};

Reflect.set(user, 'name', 'John');

console.log(user.name); 
