function create(proto) {
    function F() {}
    F.prototype = proto;

    return new F();
}

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = create(person);
me.name = "Mattew";
me.isHuman = true;
me.printIntroduction();

