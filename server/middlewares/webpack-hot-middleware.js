const hotMiddleware = require('webpack-hot-middleware')

module.exports = function(compiler, option) {
  const expressMiddleware = webpackDevMiddleware(compiler, option)

  function* koaMiddleware(next) {
    const hasNext = yield applyMiddleware(expressMiddleware, this.req, {
      end: (content) => {
        this.body = content
      },
      setHeader: (name, value) => {
        this.headers[name] = value
      },
      locals: {}
    })

    if (hasNext) {
      yield next
    }
  }

  return koaMiddleware
}
