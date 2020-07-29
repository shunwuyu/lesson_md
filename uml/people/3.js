// 原型链继承
function Parent(name) { 
  this.name = name;
}
Parent.prototype.sayName = function() {
  console.log('parent name:', this.name);
}
function Child(name) {
  this.name = name;
}

Child.prototype = new Parent('father');
Child.prototype.constructor = Child;

Child.prototype.sayName = function() {
  console.log('child name:', this.name);
}