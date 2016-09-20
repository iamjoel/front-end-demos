var Vue = require('vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var router = new VueRouter({
  transitionOnLoad: true
})

var routes = {}
routes['/let-and-const'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/let-and-const.js'))
    })
  }
}

routes['/template-str'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/template-str.js'))
    })
  }
}

routes['/arrow-function'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/arrow-function.js'))
    })
  }
}

routes['/rest-parameters-and-defaults'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/rest-parameters-and-defaults.js'))
    })
  }
}

routes['/destructing'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/destructing.js'))
    })
  }
}

routes['/for-of'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/for-of.js'))
    })
  }
}

routes['/iterator'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/iterator.js'))
    })
  }
}

routes['/module'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/module.js'))
    })
  }
}

routes['/promise'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/promise.js'))
    })
  }
}

routes['/proxy'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/proxy.js'))
    })
  }
}

routes['/generator'] = {
  component (resolve) {
    require.ensure([], function (require) {
      resolve(require('./demos/generator.js'))
    })
  }
}

router.map(routes)
router.start(Vue.extend({
  template: require('./index.html')
}), '#main')
