let target = {};
const o = {c: 3}
let obj = Object.assign(target, {a: 1}, {b: 2}, o)
console.log(obj);
o.c = 4;
console.log(obj);