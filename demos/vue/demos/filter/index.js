var Vue = require('vue')
// 全局的filter
Vue.filter('removeAlpha', function (str) {
  return str.replace(/[a-zA-Z]/g, '')
})
var Component = Vue.extend({
  template: require('./demo.html'),
  data () {
    return {
      name: 'Joel007'
    }
  },
  filters: {
    removeNumber (str) {
      return str.replace(/\d/g, '')
    }
  }
})
module.exports = Component
