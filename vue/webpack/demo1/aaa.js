const path = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist');
console.log(process.env.NODE_ENV, '++++++');
module.exports = {
  entry: './src/index',
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}