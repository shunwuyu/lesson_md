let obj ={a:1}
// 通常情况下receiver参数为当前proxy本身
let pObj=new Proxy(obj,{
    get(target,key,receiver){
        console.log("receiver",receiver); // receiver  Proxy {a:1}
        console.log("receiver===pObj",receiver===pObj); // true
        return Reflect.get(target,key)
    }
})

console.log(pObj.a);