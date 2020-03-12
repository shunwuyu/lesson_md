function Person(name,age){
  this.name=name
  this.age=age
 }
 Person.prototype.valueOf=function(){
  return this.age
 }
 function Man(name,age){
   Person.apply(this,arguments)
 }
 
 Man.prototype = Object.create(Person.prototype);
 var person=new Person("Neo",19)
 var man1=new Man("Davin",18)
 var man2=new Man("Jack",19)
 var man3=new Man("Joe",19)

 console.log(man1<19)
 console.log(person==19)
 console.log(man1<man2)
 console.log(man2==man3)
 console.log(person==man2)