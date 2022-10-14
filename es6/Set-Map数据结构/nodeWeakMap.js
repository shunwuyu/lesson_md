
global.gc();
console.log(process.memoryUsage()); // heapUsed: 4638992 ≈ 4.4M

const wm = new WeakMap();
let key = new Array(5 * 1024 * 1024);
wm.set(key, 1);
global.gc();
console.log(process.memoryUsage()); // heapUsed: 46776176 ≈ 44.6M

key = null;
global.gc();
console.log(process.memoryUsage()); // heapUsed: 4800792 ≈ 4.6M