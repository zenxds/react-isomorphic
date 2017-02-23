const config = require('config')
const webpack = require('webpack')
const app = require('koa')()
const webpackDevMiddleware = require('../server/middlewares/webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const webpackConfig = require('../webpack.config.dev.js')

/**
 * same as webpack.DefinePlugin
 * 在server引入之前定义
 */
global.__SERVER__ = true

const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/",
  noInfo: true,
  serverSideRender: true
}))

// app.use(c2k(webpackHotMiddleware(compiler.compilers[0], {
//   log: console.log,
//   path: '/__webpack_hmr',
//   heartbeat: 10 * 1000
// })))
// app.use(c2k(webpackHotServerMiddleware(compiler)))
//
require('../server/server.js')(app)

/**
 * koa-connect 1.1.0
 */
function c2k (middleware) {
  return function *c2k(next) {
    // It only takes `req` and `res`, no `next`
    if (middleware.length === 2) {
      middleware(this.req, this.res);
      return;
    }

    // Connect middleware takes `req`, `res`, and `next`
    yield new Promise((resolve, reject) => {
      middleware(this.req, this.res, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    })
    yield next;
  }
};
