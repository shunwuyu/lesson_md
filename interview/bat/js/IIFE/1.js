// 模块模式方法不仅相当的厉害而且简单。非常少的代码，你可以有效的利用与方法和属性相关的命名，
// 在一个对象里，组织全部的模块代码即最小化了全局变量的污染也创造了使用变量。
var counter = (function(){
  var i = 0;
  return {
      get: function(){
          return i;
      },
      set: function(val){
          i = val;
      },
      increment: function(){
          return ++i;
      }
  }
}());
counter.get();
counter.set(3);
counter.increment();
counter.increment();
console.log(counter.i);
// console.log(i);
