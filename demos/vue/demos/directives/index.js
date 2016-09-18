var Vue = require('vue')

var Component = Vue.extend({
  template: require('./demo.html'),
  data () {
    return {
      isCool: true,
      items: [{
        name: 'item1'
      }, {
        name: 'item2'
      }]
    }
  }

})
module.exports = Component
