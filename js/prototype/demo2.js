function Animal(planet) {
  this.planet = planet;
}
Animal.prototype.getPlanet = function() {
  return this.planet;
}

function Person(name) {
  this.name = name;
}
// 继承
Person.prototype = new Animal('earth');
Person.prototype.getName = function() {
  return this.name;
}
console.log(Person.prototype.constructor, '-----');
var person = new Person('sunyuhui');
console.log(person, '++++++');
console.log(person);