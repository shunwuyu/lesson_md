var _class;

let MyClass = annotation(_class = class MyClass {}) || _class;

function annotation(target) {
  target.annotated = true;
} // const item = new MyClass()


console.log(MyClass.annotated);
