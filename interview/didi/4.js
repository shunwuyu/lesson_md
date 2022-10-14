function fn(){
  const attrs = [1,2,3,4];
  for(var i=0,len=attrs.length; i<len; i++){//len=4
      setTimeout(function(){
         console.log(i); 
      },0)
  }
}
// fn();

// function fn(){
//   const attrs = [1,2,3,4];
//   for(let i=0,len=attrs.length; i<len; i++){//i 变let
//       setTimeout(function(){
//          console.log(i);
//       },0)
//   }
// }
// fn();

//方案2 
function fn(){
  const attrs = [1,2,3,4];
  for(let i=0,len=attrs.length; i<len; i++){//
      ;(function(){//babel 中不需要前面加“；”，自动会加；这里形成闭包，执行上下文的概念
          setTimeout(function(){
             console.log(i); 
          },0) 
      })();
  }
}
fn();