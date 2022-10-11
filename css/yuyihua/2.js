var Cat = {

    createNew: function(){
    
        var cat = {};
    
        cat.name = "大毛";
    
        cat.makeSound = function(){ console.log("喵喵喵"); };
    
        return cat;
    
    }
    
};

var cat1 = Cat.createNew();
cat1.makeSound();