let str = 'jspool'

function compose(f,g,m){
  return function(x){
      return f(g(m(x)));
  }
}

function stringToUpper(str) {
  return str.toUpperCase()
}

function stringReverse(str) {
  return str.split('').reverse().join('')
}

function stringToArray(str) {
  return str.split('')
}

let toUpperAndArray = compose(stringToArray,stringToUpper, stringReverse);

let result = toUpperAndArray(str)

console.log(result);