const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const baseWebpackConfig = require("./webpack.config.base");
// const util = require("./util");

const isProd = process.env.NODE_ENV === "production";
const resolve = relativePath => path.resolve(__dirname, relativePath);
const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: "./src/entry-client.js"
  },
  output: {
    filename: "static/js/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: [
                [
                  "@babel/preset-env",  // @loadable/babel-plugin处理后存在es6的语法
                  {
                    "modules": false
                  }
                ]
              ],
              plugins: [
                "@loadable/babel-plugin"
              ]
            }
          },
        ],
        include: [ resolve("../src") ]
      },
    ]
  },
  plugins: [
    // 生成 loadable-stats.json
    // new LoadablePlugin()
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new LoadablePlugin({
      filename: "client-manifest.json",
    })
  ]
});
if (isProd) {
  webpackConfig.plugins.push(
    // new MiniCssExtractPlugin({
    //   filename: "static/css/[name].[contenthash].css"
    // })
  );
}

module.exports = webpackConfig;
