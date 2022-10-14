function Animal(){
　  this.species = "动物";
}
function Cat(name,color){
  this.name = name;
  this.color = color;
}
Cat.prototype = new Animal();
console.log(Cat.prototype.constructor);
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species);
