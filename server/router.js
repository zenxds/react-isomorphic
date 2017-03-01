const Router = require('koa-router')
const router = new Router()
const api = require('./controllers/api')

/*
 * match all path
 */
router.get('/api/list.json', api.list)
router.get('/api/detail.json', api.detail)

module.exports = router.routes()
