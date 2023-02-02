const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  // 指定入孔文件
  entry: "./src/index.ts",
  // 指定打包文件的所在目录
  output: {
    // 指定打包文件路径目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的文件
    filename: "bundle.js"
  },
  module: {
    // 指定加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader 处理ts文件
        use: 'ts-loader',
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // template 定义了html 的模版  没有这个会默认创建一个
      template: "./src/index.html"
    })
  ]
};