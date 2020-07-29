function foo(str){
  eval(str);
  console.log(a);
}

var a=100;

foo("var a=12");