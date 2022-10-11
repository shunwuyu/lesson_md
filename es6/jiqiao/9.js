// 冻结对象
const octopus = {
    tentacles: 8,
    color: 'blue',
}
Object.freeze(octopus)
octopus.tentacles = 10 // Error, 不会改变
console.log(octopus) 