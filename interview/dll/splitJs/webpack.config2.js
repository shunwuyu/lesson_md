module.exports = {
  entry:'./a.js',
  output:{
    filename:'[name].js',
    chunkFilename:'[name].js',// 设置按需加载后的chunk名字
    publicPath:'dist/'
  }
}