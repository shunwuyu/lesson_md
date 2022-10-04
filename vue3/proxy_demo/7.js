// 对于每个可被 Proxy 捕获的内部方法，Reflect 都有一个对应的方法 
// Reflect，其名称和参数与 Proxy 钩子相同
let user = {
    name: "John",
};

user = new Proxy(user, {
get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver); // (1)
},
set(target, prop, val, receiver) {
    console.log(`SET ${prop}=${val}`);
    return Reflect.set(target, prop, val, receiver); // (2)
}
});

let name = user.name; // shows "GET name"
user.name = "Pete";
  