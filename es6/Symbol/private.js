var PClass = (function(){
    var a = '私有变量';
    var getA = function(){
    	console.log(a, '私有方法')
	}
    var setA = function(val){
            a = val
        }
    function P (){
    	this.b = '变量b，外部可访问'
    }
    P.prototype = {
        getB : function(){
            console.log(this.b,'--- 获取对象公有属性b ---')
        },
        setType: function(a,val){
            if(a == 'a'){
                setA(val);
            }
        },
        getType: function(a){
            if(a == 'a'){
                getA();
            }
        }
    }
    return P
}())

var pclass = new PClass()

pclass.b            //打印    变量b，外部可访问
pclass.getB()       //打印    变量b，外部可访问 --- 获取对象公有属性b ---
console.log(pclass) //打印    P {b: "变量b，外部可访问"}
// 通过对外开放的另一方法我们可以获取到了私有变量a
pclass.getType('a') //打印    私有变量 私有方法

// 有什么缺点？
// 私有变量只能再闭包内部访问，外部无法访问，
// 当时这个方案并不完美,为什么这么说，
// 比如我们再new 一个 pclass1 ， 
// 然后修改a属性的值，你会发现pclass的a值也
// 发生了变化
var pclass1 = new PClass();
pclass1.setType('a', '修改私有属性a的值');
pclass1.getType('a');  //打印    修改私有属性a的值  私有方法
pclass.getType('a');  //打印    修改私有属性a的值  私有方法

// 怎么办？
// 改成非自执行函数

