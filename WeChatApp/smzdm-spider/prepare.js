Array.prototype.doubele = function() {
  console.log(this);
  return this.map(ele => ele * 2);
}
var a = [1,2,3,4];
console.log(a.doubele());