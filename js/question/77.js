var isArray = [];
function getRandom(start, end) {
  return Math.floor(Math.random() * (end-start+1) + start)
 }
for(var i = 0; i<10; i++){
  isArray.push(getRandom(10,100))
}
isArray.sort()
console.log(isArray)