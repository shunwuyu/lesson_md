class Person {
  constructor(name) {
      this.name = name;
  }

  sayHello() {
      return 'hello, I am ' + this.name;
  }
}

var kevin = new Person('Kevin');
console.log(kevin.sayHello());

console.log(Object.keys(Person.prototype)); //类中定义的方法， 是不可枚举的
console.log(Object.getOwnPropertyNames(Person.prototype)) //用它