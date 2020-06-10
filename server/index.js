const express = require('express')
const {Nuxt} = require('nuxt')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const app = express()

app.use(awsServerlessExpressMiddleware.eventContext())

let config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)

app.use((req, res) => {
  req.url = `${config.router.base}${req.url}`.replace('//', '/')
  nuxt.render(req, res)
})

module.exports = app