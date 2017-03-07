import { combineReducers } from 'redux'
import list from '../containers/List/reducers'
import detail from '../containers/Detail/reducers'

export default combineReducers({
  list,
  detail
})
