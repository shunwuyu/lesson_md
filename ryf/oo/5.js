function Cat(name,color){
    this.name=name;
    this.color=color;    
}

var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","黑色");
console.log(cat1.name, cat1.color);
// 表达他们两的关系
cat1.constructor == Cat
cat2.constructor == Cat

cat1 instanceof Cat
cat2 instanceof Cat