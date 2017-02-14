import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from '../app/routes'
import configureStore from '../app/store/configureStore'

const store = configureStore(window.__INITIAL_STATE__)
const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  rootElement
)
