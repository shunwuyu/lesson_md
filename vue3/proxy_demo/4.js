// 这里的Reflect.get中的receiver参数是target对象
// 中getter调用时的this值
let obj ={a:1}

let pObj=new Proxy(obj,{
    get(target,key,receiver){
        return Reflect.get(target,key,receiver)
    }
})

console.log(pObj.a); 