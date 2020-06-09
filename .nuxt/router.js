import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fc1fe7c = () => interopDefault(import('../pages/assets.vue' /* webpackChunkName: "pages/assets" */))
const _698eee2d = () => interopDefault(import('../pages/static.vue' /* webpackChunkName: "pages/static" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/assets",
    component: _1fc1fe7c,
    name: "assets"
  }, {
    path: "/static",
    component: _698eee2d,
    name: "static"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
