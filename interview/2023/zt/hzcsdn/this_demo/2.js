const obj = {
    num: 10,
   hello: function () {
    console.log(this);    // obj
    setTimeout(() => {
      console.log(this);    // obj
    });
   }    
}
obj.hello();
