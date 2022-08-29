var obj = {};
Object.defineProperty(obj, "num", {
    value : 1,
    writable : true,
    enumerable : true,
    configurable : true
});
console.log(obj.num);