function curry(fn, ...args) {
    return args.length >= fn.length ? fn(...args) : curry.bind(null, fn, ...args);
    //如果存起来的实参数量 比 fn的形参 多，则直接调用fn
    //如果还存不够，则继续存
}

var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});
fn("a", "b", "c") 
fn("a", "b")("c")
fn("a")("b")("c")
fn("a")("b", "c")

