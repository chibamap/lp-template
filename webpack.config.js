const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');

const base = require('./webpack.config.base');

const config = merge(base, {
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      filename: 'index.html',
      minify: false
    }),
    new HtmlWebpackPlugin({
      template: "./src/form.pug",
      filename: 'form.html',
      minify: false
    })
  ],
});

module.exports = config;
