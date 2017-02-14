'use strict'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { match, RouterContext } from 'react-router'
import routes from '../../app/routes'
import App from '../../app/containers/App'
import configureStore from '../../app/store/configureStore'

module.exports = function(options) {

  return function *(next) {
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

    yield this.swig('index', {
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
