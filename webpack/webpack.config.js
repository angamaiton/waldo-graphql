const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const vendors = require('./vendors');

const config = {
  entry: {
    'dist/bundle': path.resolve(__dirname, '..', 'src', 'index.js'),
    'dist/vendors': vendors,
  },
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'dist/vendors', filename: 'dist/vendors.bundle.js' }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'node_modules/html-webpack-template/index.ejs'),
      appMountId: 'app',
      chunks: ['dist/vendors', 'dist/bundle'],
      title: 'Test',
    }),
  ],
};

module.exports = config;
