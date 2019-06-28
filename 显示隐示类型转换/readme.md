# https://juejin.im/post/5997c2a0518825243d1eec9a
2 == true               //false
2 == false              //false
[] == false             //true
"0" == false            //true
[] == ![]               //true 神奇吧

为什么提到假值，而不是真值是因为真值真的是太！多！了！但是假值只有以下这么几个：

undefined
null
false
+0、-0、NaN
""
除此以外别的值做强制类型转换的时候都是真值

为什么 
 42 == true  //false
可以这样看
Number(true)  //1

因为42 != 1

*********************************************

var bool = new Boolean(0);
document.write(bool.valueOf()); //.valueOf()方法可返回 Boolean 对象的原始值。

1、[]为对象： ToPrimitive([]) => [].valueOf().toString() => "" //JavaScript 对象转换到基本类型值时，会使用 ToPrimitive 算法，这是一个内部算法，是编程语言在内部执行时遵循的一套规则。
2、false为布尔：false => 0
3、等式变为："" == 0
4、一方为数字，一方为字符
    Number("") => 0
    => 0 == 0

************************************************
# https://harttle.land/2015/08/21/js-type-conv.html
