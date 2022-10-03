let obj ={a:1}
// 在通过pObj.a时，触发了getter属性，又继续访问了
// receiver中的getter....一直嵌套下去导致无限循环。
let pObj=new Proxy(obj,{
    get(target,key,receiver){
        return Reflect.get(receiver,key)
    }
})

console.log(pObj.a); 
