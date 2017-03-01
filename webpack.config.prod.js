const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')

const baseConfig = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, "node_modules")
        ]
      }
    ]
   },

   plugins: []
}

module.exports = [merge(baseConfig, {
  name: 'client',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__SERVER__': false,
      'process.env.NODE_ENV': JSON.stringify('prod')
    })
  ]
}), merge(baseConfig, {
  name: 'server',
  entry: './server/server.js',
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.(css|less|sass)$/,
        use: ['ignore-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__SERVER__': true,
      'process.env.NODE_ENV': JSON.stringify('prod')
    })
  ]
})]
