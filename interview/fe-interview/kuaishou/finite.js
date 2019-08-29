console.log(isFinite(Infinity));
console.log(isFinite(12));

function div(x) {
  if (isFinite(1000 / x)) {
    return 'Number is NOT Infinity.';
  }
  return "Number is Infinity!";
}

console.log(div(0));
console.log(div(1));

document.write(isNaN(123));
document.write(isNaN(-1.23));
document.write(isNaN(5-2));
document.write(isNaN(0));
document.write(isNaN("Hello"));
document.write(isNaN("2005/12/12"));