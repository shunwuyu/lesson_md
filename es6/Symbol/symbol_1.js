// 当一个对象很复杂, 有可能会覆盖怎么定义属性?
// 作为对象属性 当一个复杂对象中含有
// 多个属性的时候，很容易将某个属性名覆盖掉，
// 利用 Symbol 
// 值作为属性名可以很好的避免这一现象。
const name = Symbol('name');
const obj = {
    [name]: 'ClickPaas',
}