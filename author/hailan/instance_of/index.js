function instance_of(L, R) {
  //L 表示左表达式，R 表示右表达式
  var O = R.prototype; // 取 R 的显示原型
  // 2 直接相等
  //return L.__proto__ == O;
  // console.log(O);
  // console.log(L.__proto__, '------');
  L = L.__proto__; // 取 L 的隐式原型, 
  while (true) {
    // console.log(L.__proto__);
    if (L === null) return false;
    if (O === L)
      // 这里重点：当 O 严格等于 L 时，返回 true
      return true;
    L = L.__proto__; //一直找
  }
}

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating`);
}

function Person(name, job) {
  Animal.call(this, name);
  this.job = job;
}
Person.prototype = new Animal();

const dog = new Animal('小黄');
//console.log(dog.__proto__ == Animal.prototype);
// console.log(bili);
// console.log(instance_of(dog, Animal));
const bili = new Person('bili', '工程师');
// console.log(instance_of(bili, Person));
// console.log(instance_of(bili, Animal));
console.log(bili.__proto__.__proto__ === Animal.prototype, '----');