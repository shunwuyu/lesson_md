let func = ({value, num}) => ({total: value * num})

// 使用
var result = func({
    value: 10,
    num: 10
})

console.log(result);