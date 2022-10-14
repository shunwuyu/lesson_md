function Person(name) {}

Person.prototype = {
    get name() {
        return 'kevin';
    },
    set name(newName) {
        console.log('new name 为：' + newName)
    }
}

let person = new Person();

person.name = 'daisy';
// new name 为：daisy

console.log(person.name);
// kevin