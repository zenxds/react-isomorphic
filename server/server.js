const path = require('path')
const co = require('co')
const config = require('config')
const convert = require('koa-convert')
const session = require('koa-session')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const swig = require('koa-swig')
const json = require('koa-json')
const logger = require('koa-logger')
const onerror = require('koa-onerror')

module.exports = function(app) {
  app.context.swig = co.wrap(swig({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    ext: 'html'
  }))

  app.keys = config.get('keys')
  onerror(app)

  app.use(convert(logger()))
  app.use(bodyParser())
  app.use(convert(session(app)))
  app.use(convert(json()))
  app.use(convert(koaStatic(path.join(__dirname, '../build'))))
  app.use(convert(koaStatic(path.join(__dirname, '../node_modules'))))
  app.use(require('./middlewares/ssr-match')({

  }))
  app.use(require('./router'))

  app.listen(config.get('port'), function() {
    console.log(`server is running on port ${this.address().port}`)
  })
}
