function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  console.log(this.name);
}

var person = new Person('sunyuhui');

