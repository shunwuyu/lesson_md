// enumerable  表示对象属性是否可枚举
const cat = { x:1, y:2 }; // 直接声明的对象属性默认是可枚举的
Object.defineProperty(cat, "price", {
    value: 100,
    enumerable: false, // 默认为 false
});

Object.defineProperty(cat, "sex", {
    value: '公', // 默认false
});

Object.defineProperty(cat, "name", {
    value: "jojo",
    enumerable: true, // 说明在 for in 中是可以遍历得到
});

console.log("price" in cat);
// 同等效果代码
console.log(cat.hasOwnProperty("price")); // true

for (const key in cat) {
    console.log(key); // name
}

// 还有哪个不可枚举 
Object.keys(cat);

const dog = {x: 1, y: 2};
const obj = Object.create(dog);
obj.z = 3;
for (const key in obj) {
    console.log(key); // x, y, z
}
Object.keys(obj);