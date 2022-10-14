// ASCII buffer
const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf)
// 16s
var array = 'buffer'.split('').map(function(v){
  return '0x' + v.charCodeAt(0).toString(16)
});

console.log( array.join() );