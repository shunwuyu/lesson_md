var name = "windowsName";
function a() {
    var name = "Cherry";
    console.log(this.name);          //windowsName
    console.log("inner:" + this);    //inner:Window
}
//最后调用的对象是window
a();
console.log("outer:" + this) 