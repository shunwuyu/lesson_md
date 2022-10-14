let fun = () => console.log('time out');
let sleep2= (time)=> new Promise((resolve)=>{
  setTimeout(resolve,time)
})
sleep2(2000).then(fun);