// 以new 的方式调用
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
   throw new TypeError("Cannot call a class as a function"); 
  }
}

var Person = function Person(name) {
  _classCallCheck(this, Person);
  this.foo = 'foo';
  this.name = name;
}
Person.bar = 'bar';


// var person = Person()  // classCallCheck