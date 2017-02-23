const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
// process.traceDeprecation = true

const baseConfig = {
  entry: [
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ['latest', 'react']
        }
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
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__SERVER__': false,
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
}), merge(baseConfig, {
  name: 'server',
  entry: './server/server.js',
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs'
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
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
})]
