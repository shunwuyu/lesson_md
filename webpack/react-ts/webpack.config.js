const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
 mode: 'development',
 devtool: 'inline-source-map',
 entry: {
  app: './src/index.jsx'
 },
 output: {
  path: path.resolve(__dirname, './dist'),
  filename: '[name].bundle.js',
 },
 module: {
  rules: [
   // JavaScript
   {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
     },
    },
   },
   
    // CSS, PostCSS, and Sass
    {
     test: /\.(styl|css)$/,
     use: ['style-loader',  'css-loader', 'stylus-loader'],
    },
  ],
 },
 plugins: [
  new friendlyErrorsWebpackPlugin(),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
   title: '铁木真大屏展示',
   template: path.resolve(__dirname, './public/index.html'),
   filename: 'index.html',
  }),
 ],
}