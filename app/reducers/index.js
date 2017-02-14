import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'
import { handleAction, handleActions } from 'redux-actions'

export default handleActions({
  [types.REQUEST_LIST_DATA]: (state, action) => {
    if (action.error) {
      return state
    }

    return {
      ...state,
      list: action.payload
    }
  },

  [types.REQUEST_DETAIL_DATA]: (state, action) => {
    if (action.error) {
      return state
    }

    return {
      ...state,
      detail: action.payload
    }
  }
}, {
  list: [],
  detail: {}
})
