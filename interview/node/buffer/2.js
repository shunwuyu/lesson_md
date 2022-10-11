var buf1 = Buffer.alloc(10); // 长度为10的buffer，初始值为0x0
var buf2 = Buffer.alloc(10, 1); // 长度为10的buffer，初始值为0x1
var buf3 = Buffer.allocUnsafe(10);// 长度为10的buffer，初始值不确定
var buf4 = Buffer.from([1, 2, 3])// 长度为3的buffer，初始值为 0x01, 0x02, 0x03
console.log(buf4);