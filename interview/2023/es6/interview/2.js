var a = 100;
function fn() {
    console.log(a, '///');
    var a = 200;
    console.log(a);
}
fn();
console.log(a)
var a //  没有影响
console.log(a)
// var在同一个作用域下，如果重复使用的一个声明有一个初始值,那么它担当的不过是一个赋值语句的角色
var a = 300; //
console.log(a);