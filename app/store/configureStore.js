import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise'
import reducers from '../reducers'

const middleware = [ thunk, promise ]
if (!__SERVER__ && process.env.NODE_ENV === 'dev') {
  middleware.push(logger())
}

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducers)
    })
  }

  return store
}
