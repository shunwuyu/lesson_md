const obj = {
    num: 10,
   hello: function () {
    console.log(this);    // obj
    setTimeout(function () {
      console.log(this);    // window
    });
   }    
}
obj.hello();
