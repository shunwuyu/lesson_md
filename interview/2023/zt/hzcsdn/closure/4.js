// 柯里化
// 柯里化（currying），是把接受多个参数的函数变换
// 成接受一个单一参数（最初函数的第一个参数）的函数，
// 并且返回接受余下的参数而且返回结果的新函数的技术。
// 实际上柯里化是高阶函数的一个用法
Function.prototype.myBind = function (context = window) {
    if (typeof this !== 'function') throw new Error('Error'); // 一定是函数
    let selfFunc = this;
    let args = [...arguments].slice(1);
    
    return function F () {
        // 因为返回了一个函数，可以 new F()，所以需要判断
        if (this instanceof F) {
            return new selfFunc(...args, arguments);
        } else  {
            // bind 可以实现类似这样的代码 f.bind(obj, 1)(2)，所以需要将两边的参数拼接起来
            return selfFunc.apply(context, args.concat(arguments));
        }
    }
}
