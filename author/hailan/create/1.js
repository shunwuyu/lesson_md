const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);
me.name = "Mattew";
me.isHuman = true;

me.printIntroduction();
// console.log(person.__proto__.__proto__);