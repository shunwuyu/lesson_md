const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: 'babel-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', 
      template: 'src/index.html', 
    })
  ],
  devServer: {
    hot: true
  }
}