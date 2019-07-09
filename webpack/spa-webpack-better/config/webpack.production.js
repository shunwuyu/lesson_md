const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const os = require('os');
// 提高速度
// os.cpus().length - 1.
// parallel: true,
module.exports = {
  output: {
    filename: 'scripts/[name].[hash:5].bundles.js',
    publicPath: "/"
  },
  plugins: [
    // new ParallelUglifyPlugin({
    //   exclude: /\.min\.js$/,
    //   workerCount: os.cpus().length,
    //   uglifyES: {
    //     output: {
    //       beautify: false,
    //       comments: false
    //     },
    //     compress: {
    //       warnings: false,
    //       drop_console: true,
    //       collapse_vars: true
    //     }
    //   }
    // }),
  ],
  optimization: {
    // 压缩混淆代码
    // minimizer: [new UglifyJsPlugin({
    //   // parallel: true
    //   parallel: os.cpus().length
    // })],
  }
}