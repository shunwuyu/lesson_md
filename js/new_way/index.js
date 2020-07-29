function objectFactory() {
  const obj = new Object();
  const Constructor = [].shift.call(arguments);
  //对象原型指向构造函数的原型属性
  obj.__proto__ = Constructor.prototype;
  const ret = Constructor.apply(obj, arguments);
  // 构造函数有返回
  return typeof ret === "object" ? ret : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHello = function() {
  console.log(`hello, I am ${this.name}`);
}
let cxk = objectFactory(Person, 'cxk', '18');
console.log(cxk.name);
cxk.sayHello();