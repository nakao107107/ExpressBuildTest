const express = require('express')
const { Nuxt } = require('nuxt')
const app = express()

let config = require('../nuxt.config.js')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  await nuxt.ready()

  // Give nuxt middleware to express
  app.use(nuxt.render)
}
start()