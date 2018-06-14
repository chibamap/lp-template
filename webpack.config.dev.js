const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');

const base = require('./webpack.config');

const config = merge(base, {
  devServer: {
    contentBase: './public',
    proxy: {
      '**/*.php': { target: 'http://localhost:3000'}
    }
  },
});

module.exports = config;
