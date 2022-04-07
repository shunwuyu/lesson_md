var Cat = {
    createNew: function(){
        var cat = {};
        var sound = "喵喵喵";
        cat.makeSound = function(){ console.log(sound); };
        return cat;
    }
};

var cat1 = Cat.createNew();
console.log(cat1.sound);