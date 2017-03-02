const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')

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
  entry: './client/index.js',
  output: {
    filename: 'bundle.js'
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
  target: 'node',
  entry: './server/server.js',
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
