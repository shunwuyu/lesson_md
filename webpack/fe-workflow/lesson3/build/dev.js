const config = require('./base')()
const webpack = require('webpack');
const chalk = require('chalk');
const WebpackDevServer = require('webpack-dev-server');
const port = 8080;
// const publicPath = '/common/';

config.devServer
  .quiet(true)   // 保存第一次编译的信息
  .hot(true)
  // .https(true)
  .disableHostCheck(true)
  // .publicPath(publicPath)
  .clientLogLevel('none');

const compiler = webpack(config.toConfig());
const chainDevServer = compiler.options.devServer;
const server = new WebpackDevServer(
  compiler,
  Object.assign(chainDevServer, {})
);

// ['SIGINT', 'SIGTERM'].forEach(signal => {
//   process.on(signal, () => {
//     server.close(() => {
//       process.exit(0);
//     });
//   });
// });

server.listen(port);

// new Promise(() => {
//   compiler.hooks.done.tap('dev', stats => {
//     const empty = '    ';
//     const common = `App running at:
//     - Local: http://127.0.0.1:${port}${publicPath}\n`;
//     console.log(chalk.cyan('\n' + empty + common));
//   });
// });