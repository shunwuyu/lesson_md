function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log(this.name);
}

var zm = new Person('朱明');
console.log(zm.__proto__);
console.log(zm.__proto__.__proto__.__proto__); // null
console.log(zm.constructor.prototype);
console.log(zm.constructor.prototype == zm.__proto__);
console.log(Object.getPrototypeOf(zm))