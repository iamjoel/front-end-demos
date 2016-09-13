var Vue = require('vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var router = new VueRouter({
  transitionOnLoad: true
})

var routes = {}

routes['/template-str'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./template-str/index.js'))
    })
  }
}

routes['/promise'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./promise/index.js'))
    })
  }
}

router.map(routes)
router.start(Vue.extend({
  template: require('./index.html')
}), '#main')
