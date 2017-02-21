const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const vendors = require('./vendors');

const config = {
  entry: {
    'dist/bundle': path.resolve(__dirname, '..', 'src', 'index.js'),
    'dist/vendors': vendors
  },
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'dist/vendors', filename: 'dist/vendors.bundle.js' }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      appMountId: 'app',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '..', "dist"),
    compress: true,
    port: 9000
  }
};

module.exports = config;