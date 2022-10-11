var objA = {};
objA.name = 'a';
objA.sayName = function() {
    console.log(`My name is ${this.name} !`);
}

objA.sayName();
console.log(objA.__proto__ === Object.prototype); // true
console.log(objA instanceof Object);