function instance_of(L, R) {
  //L 表示左表达式，R 表示右表达式
  var O = R.prototype; // 取 R 的显示原型
  // 2 直接相等
  //return L.__proto__ == O;
  // console.log(O);
  // console.log(L.__proto__, '------');
  console.log(L, '-------');
  L = L.__proto__; // 取 L 的隐式原型, 
  console.log(L, '++++++++');
  while (true) {
    console.log(L, '??????');
    // console.log(L.__proto__);
    if (L === null) return false;
    if (O === L)
      // 这里重点：当 O 严格等于 L 时，返回 true
      return true;
    L = L.__proto__; //一直找
    console.log(L, '//////');
  }
}

function Animal(name) {
  this.name = name;
}
Animal.prototype = { 
  canRun: function() {
    console.log('it can run!');
  }
}

function Cat () {
  this.speak = '喵！';
}
Cat.prototype = new Animal('miao');
Cat.prototype.constructor = Cat;

const dog = new Animal('小黄');
//console.log(dog.__proto__ == Animal.prototype);
// console.log(bili);
// console.log(instance_of(dog, Animal));
const garfield = new Cat('加菲猫');
// console.log(instance_of(bili, Person));
console.log(instance_of(garfield, Animal));
// console.log(bili.__proto__.__proto__ === Animal.prototype, '----');