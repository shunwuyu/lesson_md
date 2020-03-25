@annotation
class MyClass { }

function annotation(target) {
  target.annotated = true;
}

// const item = new MyClass()
console.log(MyClass.annotated);