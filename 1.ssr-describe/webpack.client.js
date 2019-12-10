const path = require('path')

// 客户端的webpack
module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "public")
  },
  // 支持babel
  module: {
    rules: [{
      test: /\.js$/,
      // 才能支持import 支持jsx
      loader: 'babel-loader',
      exclude: /node-modules/,
      options: {
        // 这样才能支持最新的js代码
        presets: ['@babel/preset-react', ['@babel/preset-env']]
      }
    }]
  }
}