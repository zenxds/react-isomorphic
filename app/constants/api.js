import config from '../../config/default.js'

const apis = {
  list: '/api/list.json',
  detail: '/api/detail.json'
}

if (__SERVER__) {
  for (let key in apis) {
    apis[key] = `http://127.0.0.1:${config.port}` + apis[key]
  }
}

export default apis
