// function Ctor(name) {
//     this.name = name
//     return { name: "hello" + name }
// }
// let ctor = new Ctor("monica")
// console.log("返回实例", ctor)

function Ctor(name) {
    this.name = name
    return function closure() {
        console.log(name)
        console.log(this)
        return "haha"
    }
}

let ctor = new Ctor("sax")
console.log(
    "返回函数",
    ctor
) 

  