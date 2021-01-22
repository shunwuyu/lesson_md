var webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './main.jsx',
  // entry: './main.js',
  // entry: {
  //   app: './main.js'
  // },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ["@babel/preset-env"]
      //     }
      //   }
      // },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting',
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html',
    })
  ]
};