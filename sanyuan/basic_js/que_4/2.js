var s1 = "some text"; // 基本类型， 
// 读取模式中， 后台都会自动完成下列处理 
// 1. 创建 String 类型的一个实例；  
// 2. 在实例上调用指定的方法；
// 3. 销毁这个实例；
// var s1 = new String("some text"); 
// var s2 = s1.substring(2); 
// s1 = null;
// 引用类型与基本包装类型的主要区别就是对象的生存期
// 在执行流离开当前作用域之前都一直保存在内存中。
// 而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，
// 然后立即被销毁。这意味着我们不能在运行时为基本类型值添加属性和方法。
var s2 = s1.substring(2); // 不是对象， 为了直观，后台已经自动完成了一系列的处理。
console.log(s2);

var s1 = "some text"; 
s1.color = "red"; 
console.log(s1.color); //undefined