var name = 'jeskson';
function person() {
 return this.name;
}

console.log(this.name); 
console.log(window.name);
console.log(person());
