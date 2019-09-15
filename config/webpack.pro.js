const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash:4].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:4].css",
    }),
  ],
});
