function Cat(name,color){
    // 比call 更合适
    　　　　Animal.apply(this, arguments);
    
    　　　　this.name = name;
    
    　　　　this.color = color;
    
    　　}
    
    　　var cat1 = new Cat("大毛","黄色");
    
    　　alert(cat1.species); // 动物