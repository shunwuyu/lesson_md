// 场景1-函数内层变量可能会覆盖外层变量
var tmp = new Date();
function f(condition) {
    // 此处可以访问变量tmp,其值为undefined
    console.log(tmp);
    if(condition) {
        var tmp = "itclanCoder";
        return tmp;
    } else {
        // 此处可访问变量value,其值为undefined
        console.log(tmp);
        return null;
    }
}
f(false);
