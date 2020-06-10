var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry:'./a.js',
  mode:'development',
  output:{
    filename:'[name].js',
    chunkFilename:'[name].js',// 设置按需加载后的chunk名字
    publicPath:'dist/'
  },
  devServer: {
    contentBase: './',
    compress: true,
    port: 9000,
    hot: true
  },
  plugins: [ // 开始热更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
