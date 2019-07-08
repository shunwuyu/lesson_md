const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlAfterPlugin = require('./htmlAfterPlugin.js');
module.exports = {
  entry: {
    "index-index": './project/src/views/index.entry.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './project/src/views/index.html',
      inject: false
    }),
    new HtmlAfterPlugin()
  ]
}