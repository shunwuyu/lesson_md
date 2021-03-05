@annotation
class MyClass { }

function annotation(target) {
  target.annotated = true;
}

class Person {
  @readonly
  name() { return `${this.first} ${this.last}` }
}

function readonly(target, name, descriptor){
  descriptor.writable = false;
  return descriptor;
}