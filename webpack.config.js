const path = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin =require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    autofill: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/g,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/autofill.css",
    }),
    new copyWebpackPlugin({
      patterns: [
        { from: "src/assets/", to: path.resolve(__dirname, "public") },
      ],
    }),
  ],
};