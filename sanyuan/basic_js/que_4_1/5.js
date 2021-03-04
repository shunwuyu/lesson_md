var name = 'jerry';   
var obj = {  
    name : 'tom',  
    sayName(){  
        return function(){  
            console.log(this.name);  
        };
    }   
};  
obj.sayName()();
