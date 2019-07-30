const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");
const baseWebpackConfig = require("./webpack.config.base");
// const SSRServerPlugin = require("../plugin/webpack/server-plugin");
const babelConfig = require("../.babelrc");
// const util = require("./util");

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: "./src/entry-server.js"
  },
  output: {
    filename: "entry-server.js",
    libraryTarget: "commonjs2"  // 打包成commonjs2规范
  },
  target: "node",  // 指定node运行环境
  externals: [
    nodeExternals({
      whitelist: [ /\.css$/ ]  // 忽略css，让webpack处理
    })
  ],  // 不绑定node模块，保留为 require()
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              plugins: [
                "dynamic-import-node",
                "@loadable/babel-plugin"
              ]
            }
          },
        ],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   "process.env.REACT_ENV": JSON.stringify("server")  // 指定React环境为服务端
    // }),
    // 服务端不支持window document等对象，需将css外链
    // new MiniCssExtractPlugin({
    //   filename: "static/css/[name].[contenthash].css"
    // }),
    // new SSRServerPlugin({
    //   filename: "server-bundle.json"
    // })
  ]
});

module.exports = webpackConfig;
