// 16进制 
const buffer1 = Buffer.from("geekbang");  //每位代表字符
const buffer2 = Buffer.from([1,2,3,4]); // 4位长度

const buffer3 = Buffer.alloc(20); //指定长度 20 空的buffer

// console.log(buffer1);
// console.log(buffer2);
// console.log(buffer3);

buffer2.writeInt8(12, 1); //十六进制  较小的尾数
console.log(buffer2); // 256
// buffer2.writeInt16BE(512, 2); //较大的尾数 高位
// console.log(buffer2);  // 0200

// buffer2.writeInt16LE(512, 2); //低位
// console.log(buffer2);
// console.log(buffer2.toString());
console.log(buffer1.toString())
// console.log(JSON.stringify(buffer2));