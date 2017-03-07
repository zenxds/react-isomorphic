import * as types from '../constants/actionTypes'
import api from '../../../services/api'
import { createAction, createActions } from 'redux-actions'

export const requestDetailData = createAction(types.REQUEST_DETAIL_DATA, (id) => {
  return api.requestDetailData(id)
})
