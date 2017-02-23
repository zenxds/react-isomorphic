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
      res.send = function() {
        originalEnd.apply(res, arguments)
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
  const expressMiddleware = webpackDevMiddleware(compiler, option)

  function* koaMiddleware(next) {
    const hasNext = yield applyMiddleware(expressMiddleware, this.req, {
      end: (content) => {
        this.body = content
      },
      setHeader: (name, value) => {
        this.set(name, value)
      },
      locals: {}
    })

    if (hasNext) {
      yield next
    }
  }

  Object.keys(expressMiddleware).forEach(p => {
    koaMiddleware[p] = expressMiddleware[p]
  })

  return koaMiddleware
}
