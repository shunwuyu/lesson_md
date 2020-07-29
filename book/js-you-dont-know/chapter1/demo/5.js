function a(age) {
  console.log(age);
  var age = function () {
      console.log(age);
  }
  age();
}
a(18);