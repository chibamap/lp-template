const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  plugins: [
    new ExtractTextPlugin({
      filename: 'build/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?-url&minimize&sourceMap!sass-loader"
        })
      }
    ]
  },
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname, 'public/')
  }
};
