// https://juejin.im/post/6844903988018544648
const Person = function (name) {
  this.name = name;
  return 1; // 简单类型
  // return { name:  'Jason' }
}
Person.prototype.sayName = function () {
  console.log(this.name)
}
const person = new Person('Tony')
console.log(person.name)
console.log(person.sayName);
console.log(person instanceof Person)
