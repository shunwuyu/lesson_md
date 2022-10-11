const path = require('path');
const ConsoleLogOnBuildWebpackPlugin = require('./plugin/FirstPlugin.js');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: path.resolve('./loader/index.js'),
      }
    ]
  },
  plugins: [
    new ConsoleLogOnBuildWebpackPlugin()
  ]
}