const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/,
         loader: 'babel-loader',
          exclude: /node_modules/ ,
          query:{
          presets: ["latest", "stage-0", "react"]
        }
      },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/ ,
       query:{
          presets: ["latest", "stage-0", "react"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [HtmlWebpackPluginConfig]

}
