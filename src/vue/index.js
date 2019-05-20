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

var router = new VueRouter({
  routes,
  transitionOnLoad: true
})


const app = new Vue({
  router
}).$mount('#main')