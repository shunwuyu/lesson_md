// configurable
"use strict"
var person = {};
 
Object.defineProperty(person, 'name', {
    configurable: false,
    value: 'John'
});

delete person.name

console.log(person.name)

Object.defineProperty(person, 'name', {
  configurable: true 
});
 
