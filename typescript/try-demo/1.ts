// function sayHello(person:string):string {
//     return `Hello, ${person}`
// }

// sayHello('atao')

// const msg:string = sayHello('atao')
// let msg = sayHello()
// msg++

let pc: string | number ;
pc = 'one'
pc = 1

interface NumberArray {
    [index: number]: number
}
// let fibonacci:number[] = [1, '1', 2, 3, 5]
// let fibonacci:Array<number> = [1, '1', 2, 3, 5]
let fibonacci:NumberArray = [1, '1', 2, 3, 5]