const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test:/\.(scss|css)$/, use:["style-loader", "css-loader", "sass-loader"]},
      { test: /\.(png|jpe?g|gif|svg)$/i,use: [{loader: "file-loader"}]},
      { test: /\.(ogg|mp3|wav|mpe?g)$/i, use: [{loader: "file-loader"}]}

    ]
  }
};