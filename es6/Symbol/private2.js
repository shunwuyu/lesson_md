var pClass = function(){
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
}

var PClass1 = pClass(); //开辟了一个函数作用域
var PClass2 = pClass(); //重新开辟了一个函数作用域
var pclass1 = new PClass1();
var pclass2 = new PClass2();
pclass1.setType('a', '修改私有属性a的值');
pclass1.getType('a');   //打印    修改私有属性a的值  私有方法
pclass2.getType('a');   

