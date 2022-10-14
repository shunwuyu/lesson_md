
// var F = function(){};
// F.prototype = Animal.prototype;

// Cat.prototype = new F();

// Cat.prototype.constructor = Cat;

function extend(Child, Parent) {

    var F = function(){};
    
    F.prototype = Parent.prototype;
    
    Child.prototype = new F();
    
    Child.prototype.constructor = Child;
    
    Child.uber = Parent.prototype;
    
    }

function Animal() {}
Animal.prototype.species = '动物';
function Cat (name, color) {
    this.name = name;
    this.color = color;
    Animal.apply(this, arguments);
}
Cat.prototype.eat = function() {
    console.log('吃老鼠');
}
extend(Cat,Animal);
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物