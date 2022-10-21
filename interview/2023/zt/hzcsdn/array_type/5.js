function instance_of(L, R) { // L即stu ；  R即Person        
    var O = R.prototype; // O为Person.prototype     
     L = L.__proto__;   //L为stu._proto_，现在指向的是per实例对象
     while (true) {   // 执行循环                   
        if (L === null)   //不通过                            
            return false;                    
        if (O === L)    //判断：   Person.prototype === stu._proto_ ？      
             return true;   //此时，stu._proto_ 指向per实例对象，并不满足
         L = L.__proto__;  //令L=  stu._proto_._proto_，执行循环
    }                      //stu._proto_ ._proto_，看图示知：
 }                        //指的就是Person.prototype，所以也返回true
