
function compose(f, g) {
  return function(x){
    return f(g(x));
  }
}

let n = '3.56';
let number = compose(Math.round,parseFloat);
let result = number(n);
console.log(result);
