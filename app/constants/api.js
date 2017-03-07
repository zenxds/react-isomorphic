const apis = {
  list: '/api/list.json',
  detail: '/api/detail.json'
}

if (__SERVER__) {
  for (let key in apis) {
    apis[key] = __API_PREFIX__ + apis[key]
  }
}

export default apis
