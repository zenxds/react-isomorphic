const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
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

module.exports = merge(baseConfig, {
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
  devtool: "cheap-eval-source-map",
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
})

function getBabelConfig(name) {
  const cfg = JSON.parse(fs.readFileSync(name === 'server' ? './.babelrc' : `./.babelrc.${name}`))

  cfg.babelrc = false
  return cfg
}
