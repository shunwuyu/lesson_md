var  a = 1;
function f1() { // 作用域-》window + 本身
  var a = 2;
  function f2() { // 作用域-》window + f1 + 本身
    var a = 3;  //从最底层向上找 直到找到全局作用域window为止， 如果全局还没有的话就会报错
    console.log(3);
    console.log(b); // 报错
  }
  f2();
}

f1();