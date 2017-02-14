import * as types from '../constants/ActionTypes'
import api from '../services/api'
import { createAction, createActions } from 'redux-actions'

export const requestListData = createAction(types.REQUEST_LIST_DATA, () => {
  return api.requestListData()
})

export const requestDetailData = createAction(types.REQUEST_DETAIL_DATA, (id) => {
  return api.requestDetailData(id)
})
