// 请解释下symbol类型
// Symbol('1') == Symbol('1') //打印  false
var sy = sb = Symbol('a'); // 说明该数据类型以引用的方式传值
console.log(sy == sb);

var Pclass = (function(){
    const a = Symbol('a');
    const m = Symbol('m');
    class  Pclass {
        constructor(){
            this[a] = 'a这是私有变量';
            this.b = '变量B-外部可访问';
            this[m] = function(){
                console.log('私有方法');
            }
        }
        getA(){
            console.log(this[a]);
        }
        getM(){
            console.log(this[m]);
        }
    }
    return Pclass
}())

let pc = new Pclass() 
console.log(pc) 

// 只要不把 a = Symbol('a'); 
// m = Symbol('m') 这两个引用对外暴露，
// 外部是无法访问到定义的私有变量a，
// 和私有方法m， 因为他们的真实属性名称是a, 
// m 这两个引用，而且是唯一的


