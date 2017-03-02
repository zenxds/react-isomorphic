import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import routes from '../app/routes'
// import reducers from '../app/reducers'
import configureStore from '../app/store/configureStore'

const store = configureStore(window.__INITIAL_STATE__)
const rootElement = document.getElementById('app')

/**
 * key需要传一个不一样的，否则react-router会认为是一个实例，不允许修改而报错
 */
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} key={Date.now()}>
        { routes }
      </Provider>
    </AppContainer>,
    rootElement
  )
}

render()
if (module.hot) {
  module.hot.accept('../app/routes', () => {
    render()
  })
}
