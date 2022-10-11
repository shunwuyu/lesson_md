// var a = Object.create();
// console.log(a);
var a = Object.create(null);
console.log(a); // {}
console.log(a.__proto__ === Object.prototype); // 瞅瞅
console.log(a.__proto__); // 我们觉得他会指向Object吧， 他没有
console.log(a instanceof Object); // false