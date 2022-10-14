function Animal(){ }
function Cat(name,color){

    　　　　Animal.apply(this, arguments);
    
    　　　　this.name = name;
    
    　　　　this.color = color;
    
    　　}
Animal.prototype.species = "动物";

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛","黄色");
console.log(Animal.prototype.constructor);

