const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
// process.traceDeprecation = true

const baseConfig = {
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: []
  },
  plugins: []
}

module.exports = [merge(baseConfig, {
  name: 'client',
  target: 'web',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      '__SERVER__': false,
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
}), merge(baseConfig, {
  name: 'server',
  target: 'node',
  entry: './server/server.js',
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs'
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
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
})]

function getBabelConfig(name) {
  const cfg = JSON.parse(fs.readFileSync(name === 'server' ? './.babelrc' : `./.babelrc.${name}`))

  cfg.babelrc = false
  return cfg
}
