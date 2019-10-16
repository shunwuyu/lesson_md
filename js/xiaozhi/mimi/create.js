function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

var Person = {
  name: "noname",
  age: 0,
  greet: function() {
    console.log(`Hello ${this.name}`);
  }
}


var Tom = create(Person);
Tom.name = 'Tom';
console.log(Tom.name);
