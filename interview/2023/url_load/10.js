// 循环赋值
for(var i = 0; i<10; i++){
    (function(j){
         setTimeout(function(){
          console.log(j)
      }, 1000) 
    })(i)
  }