'use strict'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { match, RouterContext } from 'react-router'
import routes from '../../app/routes'
import configureStore from '../../app/store/configureStore'
import { swig } from 'koa-swig'

const template = swig.compile(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <meta name="format-detection" content="telephone=no,address=no,email=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <link rel="dns-prefetch" href="//g.alicdn.com" />
    <link rel="dns-prefetch" href="//img.alicdn.com" />
    <link rel="dns-prefetch" href="//gm.mmstat.com" />
    <link rel="dns-prefetch" href="//log.mmstat.com" />
    <script>
      window.__INITIAL_STATE__ = {{ state | safe }};
    </script>
</head>
<body>

<div id="app">{{ renderString | safe }}</div>

<script src="/bundle.js"></script>
</body>
</html>
`, {
  autoescape: true
})

module.exports = function(options) {

  return function*(next) {
    const store = configureStore()
    const { redirectLocation, renderProps } = yield _match({ routes: routes, location: this.url })

    if (redirectLocation) {
      return yield this.redirect(redirectLocation.pathname + redirectLocation.search)
    } else if(!renderProps) {
      return yield next
    }

    const params = renderProps.params
    let tasks = []

    for (let component of renderProps.components) {
      if (component && component.WrappedComponent && component.WrappedComponent.fetch) {
        const _tasks = component.WrappedComponent.fetch(store.dispatch, params)
        if (Array.isArray(_tasks)) {
          tasks = tasks.concat(_tasks)
        } else if(_tasks && _tasks.then) {
          tasks.push(_tasks)
        }
      }
    }

    yield Promise.all(tasks)

    const renderString = renderToString((
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    ))

    this.body = template({
      state: JSON.stringify(store.getState()),
      renderString: renderString
    })
  }
}

function _match(location) {
  return new Promise((resolve, reject) => {
    match(location, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(error)
      } else {
        resolve({
          redirectLocation,
          renderProps
        })
      }
    })
  })
}
