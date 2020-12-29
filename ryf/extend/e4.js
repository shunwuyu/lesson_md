//直接继承prototype有缺点
function Animal(){ }
Animal.prototype.species = "动物";
function Cat(name,color){
  this.name = name;
  this.color = color;
}
var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;

console.log(Animal.prototype.constructor);