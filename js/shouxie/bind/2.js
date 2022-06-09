// bind() 除了 this 外，还可传入多个参数；
// bind 创建的新函数可能传入多个参数；
// 新函数可能被当做构造函数调用；
// 函数可能有返回值；
let Person = {
    name: 'Tom',
    say() {
        console.log(this)
        console.log(`我叫${this.name}`)
    }
}

let Person1 = {
    name: 'Tom1',
    say() {
        console.log(this)
        console.log(`我叫${this.name}`)
    }
}

Function.prototype.bind2 = function(context) {
    //返回一个绑定this的函数，我们需要在此保存this
    let self = this
    console.log(self, '---------------')
        // 可以支持柯里化传参，保存参数
    let arg = [...arguments].slice(1)
        // 返回一个函数
    // 推迟执行
    return function() {
        //同样因为支持柯里化形式传参我们需要再次获取存储参数
        let newArg = [...arguments]
        console.log(newArg)
            // 返回函数绑定this，传入两次保存的参数
            //考虑返回函数有返回值做了return
        return self.apply(context, arg.concat(newArg))
    }
}

let fn = Person.say.bind2(Person1)
fn()


