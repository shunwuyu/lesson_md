var Animal = {

    createNew: function(){
    
        var animal = {};
    
        animal.sleep = function(){ console.log("睡懒觉"); };
    
            return animal;
    
    }
    
};

var Cat = {

    createNew: function(){
    
        var cat = Animal.createNew();
    
        cat.name = "大毛";
    
        cat.makeSound = function(){ alert("喵喵喵"); };
    
        return cat;
    
    }
    
};

var cat1 = Cat.createNew();
cat1.sleep();