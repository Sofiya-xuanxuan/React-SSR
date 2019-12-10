const path = require('path')
const nodeExternals = require('webpack-node-externals')

// 客户端的webpack
module.exports = {
  target: "node",
  mode: "development",
  entry: "./client/index.js",
  externals: [nodeExternals()], //用于规避一些代码,例如：node_modules
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