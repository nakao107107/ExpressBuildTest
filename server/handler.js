const sls = require('serverless-http')
const binaryMimeTypes = require('./binaryMimeTypes')
const nuxt = require('./index')

module.exports.render = sls(nuxt, {
  binary: binaryMimeTypes
})
