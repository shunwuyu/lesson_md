var obj = {
    hi: function(){
        console.log(this);
        return ()=>{
            console.log(this);
        }
    },
    sayHi: function(){
        return function() {
            console.log(this);
            return ()=>{
                console.log(this);
            }
        }
    },
    say: ()=>{
        console.log(this);
    }
}

let hi = obj.hi();  //输出obj对象
hi();
let sayHi = obj.sayHi();
let fun1 = sayHi(); //输出window
fun1();             //输出window
obj.say();          //输出window