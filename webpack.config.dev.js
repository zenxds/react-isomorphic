const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const autoprefixer = require('autoprefixer')
// process.traceDeprecation = true

const postcssConfig =  {
  plugins: [
    autoprefixer({ browsers: ["ios_saf >= 7", "android >= 4"] })
  ]
}

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
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: getBabelConfig('client')
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', {
        loader: 'postcss-loader',
        options: postcssConfig
      }]
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: 'postcss-loader',
        options: postcssConfig
      }, 'sass-loader']
    }, {
			test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
			use: 'url-loader?limit=100000'
		}, {
		  test: /\.(png|jpg|gif)$/,
		  use: 'url-loader?limit=1000&name=image/[hash].[ext]'
	  }, {
			test: /\.html$/,
			use: "html-loader"
  	}]
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
  const p = fs.existsSync(`./.babelrc.${name}`) ? `./.babelrc.${name}` : './.babelrc'
  const cfg = JSON.parse(fs.readFileSync(p))

  cfg.babelrc = false
  return cfg
}
