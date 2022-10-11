var objB = new Object();
objB.name = 'b';
objB.sayName = function() {
  console.log(`My name is ${this.name} !`);
}
objB.sayName();
console.log(objB.__proto__ === Object.prototype); // true
console.log(objB instanceof Object);