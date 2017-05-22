const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './App.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            module: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
            importLoaders: 1,
          }
        },
        {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [{
          loader: 'file-loader?name=/img/[name].[ext]'
        }]
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'index.html'},
      {from: 'img/favicon.ico'}
    ])
  ],
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
};
