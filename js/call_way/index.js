Function.prototype.myapply = function(context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.fn(" + args + ")");
  }

  delete context.fn;
  return result;
};

let obj = {
  name: 'jerry'
}

function sayHello (...args) {
  console.log(this.name, args)
}

sayHello.myapply(obj,[1,2,3]);