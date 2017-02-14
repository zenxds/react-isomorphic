import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './containers/App'
import List from './containers/List'
import Detail from './containers/Detail'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={List} />
      <Route path="detail/:id" component={Detail} />
    </Route>
  </Router>
)
