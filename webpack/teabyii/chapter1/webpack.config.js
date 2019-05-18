const path = require('path');

const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],

    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },
  plugins: [
    // new UglifyPlugin(), 
    // 使用 uglifyjs-webpack-plugin 来压缩 JS 代码
    // 如果你留意了我们一开始直接使用 webpack 构建的结果，你会发现默认已经使用了 JS 代码压缩的插件
    // 这其实也是我们命令中的 --mode production 的效果，后续的小节会介绍 webpack 的 mode 参数
  ],
}


