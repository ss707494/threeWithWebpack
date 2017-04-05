/**
 * Created by Administrator on 2017/4/2.
 */

const resolveApp = require('./path').resolveApp
var path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: resolveApp('src/index.js'),
  output: {
    path: resolveApp('build'),
    filename: 'static/js/bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        exclude: [
          /\.(js|jsx)$/,
        ],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.(js|jsx)$/,
        include: resolveApp('src'),
        use: [{
          loader: 'babel-loader'
        }]
      }

    ],

  },
  plugins: [
  ]

};


