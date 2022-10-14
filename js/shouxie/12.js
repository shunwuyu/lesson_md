function Foo(name){ // constructor
	this.name=name;
}

Foo.prototype.myName=function() {
    return this.name;
}
// Bar 继承 Foo
function Bar(name,label){
    Foo.call(this,name); // 借用 Foo的构造函数
    this.label=label; // 自己的属性
}
// Bar.prototype = Foo.prototype;
Bar.prototype=new Foo();
// Bar.prototype.constructor = Bar;
// Bar.prototype=Object.create(Foo.prototype);
Bar.prototype.myLabel = function () {
    return this.label;
}

var a=new Bar("a","obj a");
console.log(a.myName());// a
console.log(a.myLabel());// obj a
console.log(a.name);

// Bar.prototype=Object.create(Foo.prototype)
// Bar.prototype=Foo.prototype   
// 不会创建一个关联到Bar.prototype的新对象
// 只是让Bar.prototype直接引用Foo.prototype，
// 因此修改Bar.prototype.xxx时，Foo.prototype也会同时修改。
// console.log(Foo.prototype); // Foo 也被改了
// 如何净化？  
// 会创建一个关联到Bar.prototype的新对象 但有副作用
// console.log(Bar.prototype.constructor);
