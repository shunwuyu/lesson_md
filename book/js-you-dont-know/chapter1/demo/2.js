function func() {
  // AO 作用域内Active Object 活动对象
  var a = 2;
  var a = 1; // 变量名声明会被忽略
  console.log(a);
}

func();