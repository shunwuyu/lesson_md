let str = 'jspool'

function stringToUpper(str) {
    return str.toUpperCase()
}

function stringReverse(str) {
    return str.split('').reverse().join('')
}

function getThreeCharacters(str){
    return str.substring(0,3)
}

function stringToArray(str) {
    return str.split('')
}

function compose(...fns){
  return function(x){
      return fns.reduceRight(function(arg,fn){
          return fn(arg);
      },x)
  }
}

let toUpperAndGetThreeAndArray = compose(stringToArray, getThreeCharacters,stringReverse, stringToUpper)
let result = toUpperAndGetThreeAndArray(str)
console.log(result);
