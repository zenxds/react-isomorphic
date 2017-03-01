import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise'

import reducers from '../reducers'

// const middleware = process.env.NODE_ENV === 'production' ?
//   [ thunk, promise ] :
//   [ thunk, promise, logger() ]
const middleware = [ thunk, promise ]

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  )
  return store
}
