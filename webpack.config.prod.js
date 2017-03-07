const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const autoprefixer = require('autoprefixer')

const postcssConfig =  {
  plugins: [
    autoprefixer({ browsers: ["ios_saf >= 7", "android >= 4"] })
  ]
}

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
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: getBabelConfig('client')
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', {
          loader: 'postcss-loader',
          options: postcssConfig
        }]
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', {
          loader: 'postcss-loader',
          options: postcssConfig
        }, 'sass-loader']
      })
    }, {
			test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
			use: 'url-loader?limit=100000'
		}, {
		  test: /\.(png|jpg|gif)$/,
		  use: '@ali/x-image-loader?name=image/[name].[ext]'
	  }, {
			test: /\.html$/,
			use: "html-loader"
  	}]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__SERVER__': false,
      'process.env.NODE_ENV': JSON.stringify('prod')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.resource && /(node_modules|\.css)/.test(module.resource)
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
      disable: false,
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
        test: /\.(css|less|scss)$/,
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
  const p = fs.existsSync(`./.babelrc.${name}`) ? `./.babelrc.${name}` : './.babelrc'
  const cfg = JSON.parse(fs.readFileSync(p))

  cfg.babelrc = false
  return cfg
}
