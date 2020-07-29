var path = require("path");
var basePath = __dirname;
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'inline-source-map',
  entry: {
      main: './src/client.js'
  },
  module: {
      rules: [
          {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: ["babel-loader", "eslint-loader"],
              
          },
          { test: /\.json$/, loader: 'file-loader' },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: "file-loader",
            options: {
              name: "assets/img/[name].[ext]?[hash]"
            }
          }
          // { test: /\.jpg$/, loader: 'file' },
          // { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] }
      ]
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.join(basePath, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true
    })
  ]
};