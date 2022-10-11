const cp = require('child_process'); // 子进程的调度
const child_process = cp.fork(__dirname + '/child.js');  // node.js 里跑了另一个node.js

child_process.send('haha');
child_process.on('message', (str) => {
  console.log('parent', str);
})