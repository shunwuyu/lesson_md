const cluster = require('cluster');
const os = require('os');
if (cluster.isMaster) { //主进程
  for (let i = 0; i < os.cpus().length / 2; i++) {
    cluster.fork();
  }
    // 两个进程
  // cluster.fork();
  // cluster.fork();
} else {
  require('./app')
}