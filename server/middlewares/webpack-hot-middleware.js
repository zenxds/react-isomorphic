'use strict';
const hotMiddleware = require('webpack-hot-middleware')

function applyMiddleware(middleware, req, res) {
  const { end: originalEnd } = res

  return new Promise((resolve, reject) => {
    try {
      res.end = function(...args) {
        originalEnd.apply(res, args)
        resolve(false)
      }

      /**
       * 第三个参数是next，调用了应该继续往下走
       */
      middleware(req, res, () => {
        resolve(true)
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = function(compiler, option) {
  const expressMiddleware = hotMiddleware(compiler, option)

  const koaMiddleware = async (ctx, next) => {

    const hasNext = await applyMiddleware(expressMiddleware, ctx.req, ctx.res)

    if (hasNext) {
      await next()
    }
  }

  Object.keys(expressMiddleware).forEach(p => {
    koaMiddleware[p] = expressMiddleware[p]
  })

  return koaMiddleware
}
