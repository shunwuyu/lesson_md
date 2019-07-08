const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const os = require('os');
// 提高速度
// os.cpus().length - 1.
// parallel: true,
module.exports = {
  output: {
    filename: 'scripts/[name].[hash:5].bundles.js',
    publicPath: "/"
  },
  optimization: {
    // 压缩混淆代码
    minimizer: [new UglifyJsPlugin({
      // parallel: true
      parallel: os.cpus().length
    })],
  }
}