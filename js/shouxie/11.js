Object.mycreate = function(proto, properties) {
    function F() {};
    F.prototype = proto;
    if(properties) {
        Object.defineProperties(F, properties);
    }
    return new F();
}
var hh = Object.mycreate({a: 11}, {mm: {value: 10}});
console.dir(hh);

