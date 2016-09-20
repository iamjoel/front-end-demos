var Vue = require('vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var router = new VueRouter({
  transitionOnLoad: true
})

var routes = {}
routes['/computed-attr'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/computed-attr/index.js'))
    })
  }
}

routes['/directives'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/directives/index.js'))
    })
  }
}

routes['/form'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/form/index.js'))
    })
  }
}

routes['/filter'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/filter/index.js'))
    })
  }
}

routes['/componet'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/component/index.js'))
    })
  }
}

router.map(routes)
router.start(Vue.extend({
  template: require('./index.html')
}), '#main')
