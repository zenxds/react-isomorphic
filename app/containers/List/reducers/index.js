import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'
import { handleAction, handleActions } from 'redux-actions'

export default handleActions({
  [types.REQUEST_LIST_DATA]: (state, action) => {
    if (action.error) {
      return state
    }

    return action.payload
  }
}, [])
