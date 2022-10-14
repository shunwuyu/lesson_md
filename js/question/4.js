var a = 1;
function foo() {
  var a = 2;
  function dada() {
    console.log(a);
  }
  da(dada)
}

function da(fn) {
  fn();
}

foo();