const express = require('express');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack/webpack.config');

const APP_PORT = 3000;

const compiler = webpack(webpackConfig);

const app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  stats: {
    chunks: false,
    colors: true,
  }
});

app.listen(APP_PORT, () => { 
  console.log("Listening on port 3000!");
});
