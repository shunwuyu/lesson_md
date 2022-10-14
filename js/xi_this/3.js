function sayHi(){
    console.log('Hello,', this.name);
}
var person2 = {
    name: 'Christina',
    sayHi: sayHi
}
var person1 = {
    name: 'YvetteLau',
    friend: person2
}
person1.friend.sayHi();