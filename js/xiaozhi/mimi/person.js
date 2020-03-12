var Person = {
  name: "noname",
  age: 0,
  greet: function() {
    console.log(`Hello ${this.name}`);
  }
}

var Tom = Object.create(Person);

var tomAge = Tom.age;
var tomName = Tom.name;
console.log(`${tomAge} ${tomName}`);

Tom.age = 34;
Tom.name = "Tom";
var tomAge = Tom.age;
var tomName = Tom.name;

console.log(`${tomAge} ${tomName}`);
