var myname = "极客时间"
function showName(){
  // 到底用那个呢？
  // 当前执行上下文中
  console.log(myname);
  if(0){
   var myname = "极客邦"
  }
  console.log(myname);
}
showName()