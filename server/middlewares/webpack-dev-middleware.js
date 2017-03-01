/**
 * koa的next是一个promise或thunk函数
 * express的是一个回调
 */
'use strict';

const webpackDevMiddleware = require('webpack-dev-middleware')

function applyMiddleware(middleware, req, res) {
  const { end: originalEnd } = res

  return new Promise((resolve, reject) => {
    try {
      /**
       * 一个bundle请求找到了，应该直接返回
       */
      res.end = function(...args) {
        originalEnd.apply(res, args)
        resolve(false)
      }

      /**
       * 第三个参数是next，调用了应该继续往下走
       */
      middleware(req, res, function() {
        resolve(true)
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = function(compiler, option) {
  const expressMiddleware = webpackDevMiddleware(compiler, option)
  const locals = {}

  const koaMiddleware = async (ctx, next) => {
    const hasNext = await applyMiddleware(expressMiddleware, ctx.req, {
      end: (content) => {
        ctx.body = content
      },
      setHeader: (...args) => {
        ctx.set.apply(ctx, args)
      },
      locals: {
        set webpackStats(val) {
          locals.webpackStats = val;
        }
      },
      set statusCode(val){
        ctx.status = val
      }
    })
    ctx.res.locals = locals

    if (hasNext) {
      await next()
    }
  }

  Object.keys(expressMiddleware).forEach(p => {
    koaMiddleware[p] = expressMiddleware[p]
  })

  return koaMiddleware
}
