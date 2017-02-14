const path = require('path')
const app = require('koa')()
const session = require('koa-session')
const koaStatic = require('koa-static')
const bodyparser = require('koa-bodyparser')
const swig = require('koa-swig')
const json = require('koa-json')
const logger = require('koa-logger')
const config = require('config')

app.context.swig = swig({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  ext: 'html'
})
app.keys = config.get('keys')
app.use(logger())
app.use(bodyparser())
app.use(session(app))
app.use(json())
app.use(koaStatic(path.join(__dirname, '../build')))
app.use(koaStatic(path.join(__dirname, '../node_modules')))
app.use(require('./middlewares/ssr-match')({

}))
app.use(require('./router'))

app.on('error', function (err) {
  console.log(err)
})

module.exports = function() {
  app.listen(config.get('port'), function() {
    console.log(`server is running on port ${this.address().port}`)
  })
}
