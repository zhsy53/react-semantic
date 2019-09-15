const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const webpack = require("webpack");
module.exports = merge(commonConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    // host: "0.0.0.0",
    host: "127.0.0.1",
    port: 8899,
    hot: true,
    open: true,
    overlay: { errors: true },
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
  devtool: "inline-source-map",
});
