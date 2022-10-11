const camelizeRE = /-(\w)/g

// return str.replace(camelizeRE, (_, c) =>{ 
//     console.log(_, c);
//     return c ? c.toUpperCase() : ''
// })
function camelize(str) {
    return str.replace(camelizeRE, (_, c) =>{ c ? c.toUpperCase() : ''})
}

console.log(camelize('ab-cd'));