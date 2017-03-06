const Koa = require('koa')
const app = new Koa()
require('../build/server.js')(app)
