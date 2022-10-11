function supFather(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green']; // 复杂类型
}
supFather.prototype.sayName = function (age) {
  console.log(this.name, 'age');
};
// 子类
function sub(name, age) {
  // 借用父类的方法：修改它的this指向,赋值父类的构造函数里面方法、属性到子类上
  supFather.call(this, name);
  this.age = age;
}
// 重写子类的prototype，修正constructor指向
function inheritPrototype(sonFn, fatherFn) {
  sonFn.prototype = Object.create(fatherFn.prototype); // 继承父类的属性以及方法
  sonFn.prototype.constructor = sonFn; // 修正constructor指向到继承的那个函数上
}
inheritPrototype(sub, supFather);
sub.prototype.sayAge = function () {
  console.log(this.age, 'foo');
};
// 实例化子类，可以在实例上找到属性、方法
const instance1 = new sub("OBKoro1", 24);
const instance2 = new sub("小明", 18);
instance1.colors.push('black')
console.log(instance1) // {"name":"OBKoro1","colors":["red","blue","green","black"],"age":24}
console.log(instance2) // {"name":"小明","colors":["red","blue","green"],"age":18} 