function Person(name,age){
  this.name=name
  this.age=age
 }

 Person.prototype.toString=function(){
  return "I am a Person, my name is "+ this.name
 }

function Man(name,age){
  Person.apply(this,arguments)
}

Man.prototype = Object.create(Person.prototype);

Man.prototype.toString=function(){
  return "I am a Man, my name is"+this.name;
}

var person=new Person("Neo",19)
var man1=new Man("Davin",18)
var man2=new Man("Jack",19)

console.log(person+"");
console.log(man1+"");