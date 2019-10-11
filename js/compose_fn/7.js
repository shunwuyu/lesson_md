let str = 'jspool'

function stringToUpper(str) {
    return str.toUpperCase()
}

function stringReverse(str) {
    return str.split('').reverse().join('')
}

function stringToArray(str) {
  return str.split('')
}

function getThreeCharacters(str){
  return str.substring(0,3)
}

let toUpperAndReverse = compose(stringReverse, stringToUpper)
// let toUpperAndArray = compose(stringToArray, stringToUpper)
let result = toUpperAndReverse(str)

