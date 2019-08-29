// console.log('hello dfdsf');
let decLiteral: number = 1;
// decLiteral = "12121";
let hexLiteral: number = 0xf00d;

let user_name: string = "bob";  
let sentence: string = `Hello, my name is ${name}`;

let list:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];

function div(x) {
  if (isFinite(1000/x)) {
    return 'Number is NOT Infinity'
  };
  return 'Number is Infinity';
}
console.log(div(0));