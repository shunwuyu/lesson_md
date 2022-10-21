function typeOf (value) {
    return function (obj) {
        const toString = Object.prototype.toString;
        const map = {
            '[object Boolean]'	 : 'boolean',
            '[object Number]' 	 : 'number',
            '[object String]' 	 : 'string',
            '[object Function]'  : 'function',
            '[object Array]'     : 'array',
            '[object Date]'      : 'date',
            '[object RegExp]'    : 'regExp',
            '[object Undefined]' : 'undefined',
            '[object Null]'      : 'null',
            '[object Object]' 	 : 'object'
        };
        return map[toString.call(obj)] === value;
    }
}

var isNumber = typeOf('number');
var isFunction = typeOf('function');
var isRegExp = typeOf('regExp');

isNumber(0); // => true
isFunction(function () {}); // true
isRegExp({}); // => false