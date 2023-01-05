function add(a, b) {
    return a + b ;
}
var curry = function(fn) {
    var args = [].slice.call(arguments, 1);
    // console.log(args);
    return function() {
        console.log(arguments);
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    }
}
// var addCurry = curry(add, 1, 2);
// console.log(addCurry());
// var addCurry = curry(add, 1);
// console.log(addCurry(2))
var addCurry = curry(add);
console.log(addCurry(1, 2))