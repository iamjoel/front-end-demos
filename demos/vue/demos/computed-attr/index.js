var Vue = require('vue')

var Component = Vue.extend({
  template: require('./demo.html'),
  data () {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullName: {
      get () {
        return this.firstName + this.lastName
      },
      set (newFullName) {
        this.firstName = newFullName.charAt(0)
        this.lastName = newFullName.substr(1)
      }
    }
  }
})
module.exports = Component
