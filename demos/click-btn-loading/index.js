var Vue = require('vue')
Vue.component('btn-click-loading', {
  template: require('./btn.html'),
  props: {
    btnId: {
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      this.$dispatch('btn-clicked', this.btnId)
    }
  }
})

new Vue({
  el: '.wrap',
  data: {
    btn1: {
      id: 1,
      isLoading: false
    },
    btn2: {
      id: 2,
      isLoading: false
    }
  },
  events: {
    'btn-clicked': function (btnId) {
      var btn = this['btn' + btnId]
      btn.isLoading = true
      setTimeout(() => {
        btn.isLoading = false
      }, 3000)
    }
  }
})
