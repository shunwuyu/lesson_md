function a(age) {
  console.log(age);
  // function age
  // function age() {
  //   console.log('25');
  // }
  var age = function () {
      console.log('25');
  }
}
a(18);