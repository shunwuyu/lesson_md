function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  return 'hello, I am ' + this.name;
};

var kevin = new Person('Kevin');
kevin.sayHello();

console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype)); 