const webpack = require('webpack')
const Koa = require('koa')
const app = new Koa()
const webpackDevMiddleware = require('../server/middlewares/webpack-dev-middleware')
const webpackHotMiddleware = require('../server/middlewares/webpack-hot-middleware')
const webpackHotServerMiddleware = require('../server/middlewares/webpack-hot-server-middleware')
const webpackConfig = require('../webpack.config.dev.js')

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  publicPath: "/",
  noInfo: true,
  serverSideRender: true
}))
app.use(webpackHotMiddleware(compiler.compilers[0], {
}))
app.use(webpackHotServerMiddleware(compiler))

require('../server/server.js')(app)
