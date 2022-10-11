function sayHi(){
    console.log('Hello,', this.name);
}

var person = {
    name: 'YvetteLau',
    sayHi: sayHi
}
var name = 'Wiliam';
person.sayHi();