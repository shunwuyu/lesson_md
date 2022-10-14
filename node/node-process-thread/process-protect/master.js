// master.js
const fork = require('child_process').fork;
const cpus = require('os').cpus();

const server = require('net').createServer();
server.listen(3000);
process.title = 'node-master'

const workers = {};
const createWorker = () => {
  const worker = fork('worker.js');
  worker.on('message', function (message) {
    if (message.act === 'suicide') {
      createWorker();
    }
  })
  worker.on('exit', function (code, signal) {
    console.log('worker process exited, code: %s signal: %s', code, signal);
    delete workers[worker.pid];
  });
  worker.send('server', server);
  workers[worker.pid] = worker;
  console.log('worker process created, pid: %s ppid: %s', worker.pid, process.pid);
}

for (let i = 0; i < cpus.length; i++) {
  createWorker();
}

// ctrl-c 发送 SIGINT 信号给前台进程组中的所有进程。常用于终止正在运行的程序
process.once('SIGINT', close.bind(this, 'SIGINT')); // kill(2) Ctrl-C
// ctrl-\ 发送 SIGQUIT 信号给前台进程组中的所有进程，终止前台进程并生成 core 文件
process.once('SIGQUIT', close.bind(this, 'SIGQUIT')); // kill(3) Ctrl-\
process.once('SIGTERM', close.bind(this, 'SIGTERM')); // kill(15) default
process.once('exit', close.bind(this));

function close(code) {
  console.log('进程退出！', code);

  if (code !== 0) {
    for (let pid in workers) {
      console.log('master process exited, kill worker pid: ', pid);
      workers[pid].kill('SIGINT');
    }
  }

  process.exit(0);
}
