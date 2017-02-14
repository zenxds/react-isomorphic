import fetch from 'isomorphic-fetch'
import apis from '../constants/api'

/**
 * api请求
 */
export default {
  requestListData() {
    return fetch(apis.list).then(response => response.json()).then(response => response.result)
  },

  requestDetailData(id) {
    return fetch(apis.detail + '?id=' + id).then(response => response.json()).then(response => response.result)
  }
}
