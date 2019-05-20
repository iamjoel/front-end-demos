var Vue = require('vue')

var Component = Vue.extend({
  template: require('./demo.html'),
  data () {
    return {
      selectedHobbies: [],
      hobbies: [{
        name: '运动',
        value: 'sport'
      }, {
        name: '游戏',
        value: 'game'
      }, {
        name: '其他',
        value: 'others'
      }],
      secret: ''
    }
  }
})
module.exports = Component
