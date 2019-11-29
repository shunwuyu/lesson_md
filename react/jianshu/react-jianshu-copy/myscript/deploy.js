const shelljs = require('shelljs');
const Rsync = require('rsync');
const path = require('path');
const colors = require('colors');
const argv = require('yargs').argv;

const [
  targetName,
] = argv._;

const host_map = {
  prod1: 'root@140.143.242.226:/root/fe-production/jianshu',
};

if (!host_map[targetName]) {
  shelljs.echo(colors.red('目标主机不存在'));
  shelljs.exit(1);
}


// 通知 开始构建

// 安装依赖
// console.log(colors.yellow('🐛️ 安装依赖'));
// if (shelljs.exec('npm i').code !== 0) {
//   shelljs.echo('error: npm install error.');
//   shelljs.exit(1);
// }

// 测试
// console.log(colors.yellow('🐛️ 进行测试'));
// if (shelljs.exec('npm run test').code !== 0) {
//   shelljs.echo('error: npm install error.');
//   shelljs.exit(1);
// }

// // 构建

// console.log(colors.yellow('☕️ 开始构建'));
// if (shelljs.exec('npm run build').code !== 0) {
//   shelljs.echo('error: npm install error.');
//   shelljs.exit(1);
// }

// // 部署
console.log(colors.yellow('🐛️ 开始部署'));
const rsync = Rsync.build({
  source: path.join(__dirname, '../build/*'),
  destination: host_map[targetName],
  flags: 'avz',
  shell: 'ssh',
});

rsync.execute((err, code, cmd) => {
  console.log(err, code, cmd);
  console.log(colors.green('🚀 部署完成'));
});