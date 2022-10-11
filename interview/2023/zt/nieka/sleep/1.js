let fun = () => console.log('time out');
let sleep = function(fun,time){
  setTimeout(()=>{
    fun();
  },time);
}

sleep(fun,2000);

