const flag1: number[] = [1, 2, 3];
// 元组类型
const flag: [string, number] = ["hello", 1];
// 普通枚举 初始值默认为 0 其余的成员会会按顺序
自动增长 可以理解为数组下标
enum Color {
    RED,
    PINK,
    BLUE,
}
const pink: Color = Color.PINK;
console.log(pink)
const sym1 = Symbol("hello");
const sym2 = Symbol("hello");
console.log(Symbol("hello") === Symbol("hello"));
function hello(name: string): void {}
