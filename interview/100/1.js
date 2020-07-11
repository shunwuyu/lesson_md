function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log(this.name);
}
//顶部
function myInstanceof(left, right) { 
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left === null || left === undefined)
      return false
    if (prototype === left)
      return true
    left = left.__proto__
  }
}


function Boy(name,sex='男'){
  Person.apply(this, arguments);
　this.name = name;
　this.sex = sex;
}

Boy.prototype = new Person();
Boy.prototype.constructor = Boy;

const xsg = new Person('朱哥哥');
const hyc = new Boy('黄毅超');
xsg.sayName();
console.log(xsg instanceof Person);
console.log(xsg.__proto__ == Person.prototype);
console.log(hyc.__proto__.__proto__ == Person.prototype);
console.log(hyc.__proto__.__proto__.__proto__.__proto__);

