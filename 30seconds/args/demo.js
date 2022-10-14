const err = ( message ) => {
  throw new Error( message );
}


const sum = function (
  num = err('first param is not defined'), 
  otherNum = err('second param is not defined')
) {
  return num + otherNum;
}

console.log(sum(1, 2));
console.log(sum( undefined, 10 ));
console.log(sum( 10 ));