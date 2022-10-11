function Animal(){ }
Animal.prototype.species = "动物";
function Cat(name,color){
  this.name = name;
  this.color = color;
}
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species);
// 这样做的优点是效率比较高（不用执行和建立Animal的实例了），比较省内存
// 有问题
console.log(Animal.prototype.constructor);
