// 当child对象被继承于pObj对象时，receiver参数会自动指向到继承它的对象
let obj ={a:1}

var pObj=new Proxy(obj,{
    get(target,key,receiver){
        return receiver
    }
})

console.log(pObj.getReceiver); // pObj {a: 1}

let child = Object.create(pObj);
console.log(child.getReceiver); 