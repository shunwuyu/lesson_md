const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
  },
  cache: true
};