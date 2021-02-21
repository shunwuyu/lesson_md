// class Person {
//   static sayHello() {
//       return 'hello';
//   }
// }

// Person.sayHello() // 'hello'

// var kevin = new Person();
// kevin.sayHello();  // 静态方法在类上

function Person() {}

Person.sayHello = function() {
    return 'hello';
};

Person.sayHello(); // 'hello'

var kevin = new Person();
kevin.sayHello();  // 静态方法在类上

