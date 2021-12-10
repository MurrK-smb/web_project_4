
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
  devtool: 'inline-source-map',
  entry: "./src/pages/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '',
    clean: true,
  },
  target: ['web', 'es5'],
  stats: { children: true },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg)$/i,
        type: "asset/resource"
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
}