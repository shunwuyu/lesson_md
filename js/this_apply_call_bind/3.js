var name = "windowsName";
var a = {
    // name: "Cherry",
    fn : function () {
        console.log(this.name);      // undefined
    }
}
//最后调用的对象还是 a
window.a.fn();
