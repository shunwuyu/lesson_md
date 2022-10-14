// 'use strict';
var x = 3;
var foo = {
  x: 2,
  baz: {
    x: 1,
    bar: function() {
      // console.log(this.x, '------------')
      console.log(this);
      return this.x
    }
  }
}
var go = foo.baz.bar;
console.log(go(), '++++++++++++'); // 普通函数
console.log(foo.baz.bar());