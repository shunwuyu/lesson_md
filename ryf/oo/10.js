// 它相当于完全删除了prototype 对象原先的值，然后赋予一个新值
Cat.prototype = new Animal(); // 会覆盖掉constructor
// 任何一个prototype对象都有一个constructor属性，指向它的构造函数
// console.log(cat1.constructor == Cat.prototype.constructor);
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species);


