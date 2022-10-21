function instance_of(L, R) {
    var O = R.prototype; // 取 R 的显示原型 
    L = L.__proto__; // 取 L 的隐式原型
    while (true) { 
        if (L === null)      
             return false;   
        if (O === L)  // 当 O 显式原型 严格等于  L隐式原型 时，返回true
             return true;   

        L = L.__proto__;  
    }
}