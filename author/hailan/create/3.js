function Animal(name) {
    this.name = name;
}
Animal.prototype = { 
canRun: function() {
    console.log('it can run!');
}
}
  
function Cat () {
    this.speak = '喵！';
}
Cat.prototype = new Animal('miao');
Cat.prototype.constructor = Cat;

var miao = new Cat('加菲');
var zrm = Object.create(miao);
zrm.era = '向前折';
console.log(zrm.__proto__.__proto__.__proto__);


