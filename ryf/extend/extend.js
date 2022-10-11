function Animal(){ }
Animal.prototype.species = "动物";
function Cat(name,color){
  this.name = name;
  this.color = color;
}
function extend(Child, Parent) {

  　　　　var F = function(){};
  
  　　　　F.prototype = Parent.prototype;
  
  　　　　Child.prototype = new F();
  
  　　　　Child.prototype.constructor = Child;
        // 纯备用属性
        // 为子对象设一个uber属性，这个属性直接指向父对象的prototype属性
  　　　　Child.uber = Parent.prototype;
  　　}

  extend(Cat,Animal);
  var cat1 = new Cat("大毛","黄色");

console.log(cat1.species);