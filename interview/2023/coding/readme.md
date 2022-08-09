https://juejin.cn/post/6847902225423925255#heading-14

var foo = {
        bar: function(){
            return this.baz;
        },
         baz:1
    }
console.log(typeof (f=foo.bar)());
