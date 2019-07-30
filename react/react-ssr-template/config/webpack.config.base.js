const webpack = require("webpack");
const path = require("path");
// 压缩 js
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩 css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

let env = "dev";
let isProd = false;
if (process.env.NODE_ENV === "production") {
  env = "prod";
  isProd = true;
}

const baseWebpackConfig = {
  mode: isProd ? "production" : "development",
  devtool: isProd ? "#source-map" : "#cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist/" // 打包后输出路径以/dist/开头
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  optimization: {
    // mode为production自动启用
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { 
          map: { inline: false }
        }
      })
    ]
  },
  plugins: [
    // 定义一个全局变量
    // new webpack.DefinePlugin({
    //   "process.env": require("./" + env + ".env")
    // })
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash].css"
    })
  ]
}

module.exports = baseWebpackConfig;
