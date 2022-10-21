function Person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
function Student(name,age,sex,score){
    Person.call(this,name,age,sex);  
    this.score = score;
 }
Student.prototype = new Person();  // 这里改变了原型指向，实现继承
var stu = new Student("小明",20,"男",99); //创建了学生对象stu
console.log(stu instanceof Student);    // true
console.log(stu instanceof Person);    // true
console.log(stu instanceof Object);   
console.log(stu.__proto__, Student.prototype, Student.prototype.constructor)