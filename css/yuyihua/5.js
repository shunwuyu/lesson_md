var Cat = {

    sound : "喵喵喵",
    
    createNew: function(){
    
    var cat = {};
    
    cat.makeSound = function(){ console.log(Cat.sound); };
    
    cat.changeSound = function(x){ Cat.sound = x; };
    
    return cat;
    
    }
    
    };

    var cat1 = Cat.createNew();

    var cat2 = Cat.createNew();
    
    cat1.makeSound();

    cat2.changeSound("啦啦啦");

    cat1.makeSound();