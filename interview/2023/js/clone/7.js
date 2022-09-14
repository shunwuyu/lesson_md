function deepClone(origin, target) {
    var target = target || {}, //容错处理，防止用户不传target值
        toStr = Object.prototype.toString,
        arrAtr = "[object Array]";
    for (var prop in origin) {
        //遍历对象
        if (origin.hasOwnProperty(prop)) {
            //防止拿到原型链属性
            if (
                origin[prop] !== "null" &&
                typeof origin[prop] == "object"
            ) {
                //判断是不是原始值
                target[prop] =
                    toStr.call(origin[prop]) == arrAtr ? [] : {}; //建立相对应的数组或对象
                deepClone(origin[prop], target[prop]); //递归，为了拿到引用值里面还有引用值
            } else {
                target[prop] = origin[prop]; //是原始值，直接拷贝
            }
        }
    }
    return target;
}
