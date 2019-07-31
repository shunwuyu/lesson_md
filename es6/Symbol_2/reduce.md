
Array.prototype.reduce = function (callback,prev) {
    //遍历this 数组
    for (let i = 0; i < this.length; i++) {
        //判断有没有设置初始值
        if (typeof prev === "undefined") {
            //没有初始值，则调用callback,转入当前值，下一个值，当前index为下一个,当前数组
            prev = callback(this[i], this[i + 1], i + 1, this);
        } else {
            //有初始值，则调用callback，传入prev为第一个值，第二个为当前的i,当前index为i,当前数组
            prev = callback(prev, this[i], i, this);
        }
    }
    return prev;
};
 
let r1 = [1, 2, 3, 4].reduce(function (prevValue, currentValue, currentIndex, array) {
    return prevValue + currentValue;
},22);