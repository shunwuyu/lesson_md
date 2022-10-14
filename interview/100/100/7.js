var cc = Object.create({b: 1}, {
  a: {
      value: 3,
      writable: true,
      configurable: true
  }
});
console.log(cc); // {a: 3}
console.log(cc.hasOwnProperty('a'), cc.hasOwnProperty('b')); // true false 说明第二个参数设置的是新对象自身可枚举的属性
console.log(cc.__proto__); // {b: 1} 新对象cc的__proto__指向{b: 1}
console.log(cc.__proto__ === Object.protorype); // false
console.log(cc instanceof Object); // true cc是对象，原型链上肯定会出现Object