function sum(a,b,c) {
  console.log(a+b+c)
}


function curry(fn) {

}


let _sum = curry(sum);


let A = _sum(1);

let B = A(2);

B(3)

