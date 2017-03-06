const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const baseConfig = {
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: []
  },

  plugins: []
}

module.exports = [merge(baseConfig, {
  name: 'client',
  target: 'web',
  entry: {
    bundle: './client/index.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: getBabelConfig('client')
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract('css-loader')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__SERVER__': false,
      'process.env.NODE_ENV': JSON.stringify('prod')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        ascii_only: true
      },
      compress: {
        warnings: false,
        drop_console: false
      }
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'main.css'
    })
  ]
}), merge(baseConfig, {
  name: 'server',
  target: 'node',
  entry: './scripts/prod.js',
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: getBabelConfig('server')
      },
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

function getBabelConfig(name) {
  const cfg = JSON.parse(fs.readFileSync(name === 'server' ? './.babelrc' : `./.babelrc.${name}`))

  cfg.babelrc = false
  return cfg
}
