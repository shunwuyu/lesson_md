var foo = ["one", "two", "three", "four"];

var [first, , , last] = foo;

var a, b; //先声明变量

[a, b] = [1, 2];
通过解构赋值可以方便的交换两个变量的值。
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const student = {
    name:'Ming',
    age:'18',
    city:'Shanghai'  
  };
  
  const {name,age,city} = student;

