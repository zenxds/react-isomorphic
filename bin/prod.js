const config = require('config')
const app = require('koa')()
require('../build/server.js')(app)
