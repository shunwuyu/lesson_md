let a;
console.log(typeof a); // undefined
const fn = (b) => {console.log(typeof b)}
fn();
const o = {c: '1'}
console.log(typeof o.d);
const fnNoReturn = () => {};
console.log(typeof fnNoReturn());