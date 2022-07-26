function New(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, 
        Array.prototype.slice.call(arguments, 1));
    // 如果有返回值 排除  null 
    if ((typeof ret === "object" || typeof ret === "function")
     && ret !== null) {
        return ret;
    }
    return res 
}

var obj = New(A, 1, 2);
var obj = new A(1, 2); // equal 