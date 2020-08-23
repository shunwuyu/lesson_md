let a = {
  name: "muyiy",
  age: 18
}
let b = {
  b1: Symbol("muyiy"),
  b2: null,
  b3: undefined
}
let c = Object.assign(a, b);
console.log(c);