function Cat(name,color){
    this.name = name;
    this.color = color;
}
    
Cat.prototype.type = "猫科动物";
Cat.prototype.eat = function(){console.log("吃老鼠")};

var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","黑色");
console.log(cat1.type);
cat1.eat();

cat1.eat == cat2.eat

// 其实都是同一个内存地址，指向prototype对象，因此就提高了运行效率
