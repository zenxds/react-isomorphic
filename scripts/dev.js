// require("babel-register")

const webpack = require('webpack')
const Koa = require('koa')
const app = new Koa()
const webpackDevMiddleware = require('../server/middlewares/webpack-dev-middleware')
const webpackHotMiddleware = require('../server/middlewares/webpack-hot-middleware')
const webpackConfig = require('../webpack.config.dev.js')

console.log('Waiting for webpacking ...')
const compiler = webpack(webpackConfig)
const webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
  publicPath: "/",
  noInfo: true,
  stats: {
    colors: true
  },
  serverSideRender: true
})
app.use(webpackDevMiddlewareInstance)
app.use(webpackHotMiddleware(compiler, {
}))

let isListening = false
webpackDevMiddlewareInstance.waitUntilValid(() => {
  if (isListening) {
    return
  }

  require('../server/server.js')(app)
  require('./watch')
  isListening = true
})
