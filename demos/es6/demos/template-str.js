var Vue = require('vue')

var Component = Vue.extend({
  ready () {
    let name = 'Joel'
    let templateStr = `Hello I'm ${name}`
    console.log(templateStr)
  }
})
module.exports = Component
