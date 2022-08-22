var baz = 200;
var bar = {
    baz: 100,
    foo: function() {
        console.log(this.baz);
    }
};
var foo = bar.foo;

// 进入环境：global
foo(); // 200，严格模式中会报错，Cannot read property 'baz' of undefined

// 进入环境：global bar
bar.foo();
