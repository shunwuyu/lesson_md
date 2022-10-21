function getType(o) {
    //获取构造函数
    var constructor = o.__proto__.constructor;
    if (constructor === Array) {
      return "Array";
    } else if (constructor === Object) {
      return "Object";
    } else {
      return "参数类型不是Array也不是Object";
    }
  }
  var a = [1, 2, 3];
  console.log(getType(a));
