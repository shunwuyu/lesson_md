var bb = Object.create(null, {
  a: {
      value: 2,
      writable: true,
      configurable: true
  }
});
console.dir(bb); // {a: 2}
console.log(bb.__proto__); // undefined
console.log(bb.__proto__ === Object.prototype); // false
console.log(bb instanceof Object);
