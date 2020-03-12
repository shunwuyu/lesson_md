var a ={
  name : "Cherry",
  fn : function (a,b) {
      console.log( a + b)
  }
}

var b = a.fn;
b.bind(a,1,2)