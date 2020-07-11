// https://juejin.im/post/5c8efeb1e51d45614372addd

function a(age) {
  console.log(age, '--------');
  var age = 20
  console.log(age, '+++++++++++++');
  function age() {
  }
  console.log(age, '///////////////');
}

a(18);