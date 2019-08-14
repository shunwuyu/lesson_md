obj = {
  name: 'a',
  getName : function () {
      console.log(this.name);
  }
}

var fn = obj.getName
obj.getName()
var fn2 = obj.getName()
fn()
fn2()