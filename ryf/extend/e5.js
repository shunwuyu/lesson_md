function Animal(){}
Animal.prototype.species = "动物";
function Cat(name,color){
  this.name = name;
  this.color = color;
}
function extend2(Child, Parent) {

  　　　　var p = Parent.prototype;
  
  　　　　var c = Child.prototype;
  
  　　　　for (var i in p) {
  
  　　　　　　c[i] = p[i];
  
  　　　　　　}
  
  　　　　c.uber = p;
  
  　　}

  extend2(Cat, Animal);

  　　var cat1 = new Cat("大毛","黄色");
  
  console.log(cat1.species); // 动物