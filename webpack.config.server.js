const serverConfiguration = require('universal-webpack').serverConfiguration
const settings = require('./universal-webpack-settings')
const configuration = require('./webpack.config')

module.exports = serverConfiguration(configuration, settings)
