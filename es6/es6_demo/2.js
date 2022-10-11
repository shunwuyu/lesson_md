// 关于获取对象属性值的吐槽
let obj = {};
// const name = obj && obj.name;
const name = obj?.name;
console.log(name);