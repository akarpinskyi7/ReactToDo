const webpack = require('webpack');
  module.exports = {
    devtool: 'inline-source-map',
    entry: [
      'webpack-hot-middleware/client',
      './index.js'
    ],
    output: {
      path: require("path").resolve("./dist"),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  };


