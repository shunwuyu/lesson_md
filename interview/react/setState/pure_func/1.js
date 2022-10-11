let student = {
  firstName: "testing",
  lastName: "testing",
  marks: 500
}



// // 非纯函数
// function appendAddress() {
//   student.address = {streetNumber:"0000", streetName: "first", city:"somecity"};
// }

// console.log(appendAddress());

function appendAddress(student) {
  let copystudent = Object.assign({}, student);
  copystudent.address = {streetNumber:"0000", streetName: "first", city:"somecity"};
  return copystudent;
}

console.log(appendAddress(student));
console.log(student);