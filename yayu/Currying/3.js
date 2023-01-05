function add(x, y, z) {
    return x + y + z
}

function curry(fn) {
    return function f() {
        const args = [].slice.call(arguments)
        if (args.length < fn.length) {
            return function() {
                return f.apply(this, args.concat([].slice.call(arguments)))
            }
        } else {
            return fn.apply(this, args);
        }
    }
}
var fn = curry(add);
console.log(fn(1)(2)(3))