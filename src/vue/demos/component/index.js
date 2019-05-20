var Vue = require('vue')

var Component = Vue.extend({
  template: require('./demo.html'),
  ready () {
    var MyComponent = Vue.extend({
      template: '<div>I am {{name}}</div> data from init: {{msg}}<br/>' +
        '换变的的传入数据：{{changableMsg}}<br>' +
        '<input type="text" v-model="canChangeParentMsg"><br>' +
        '<button @click="notify">向父组件发事件</button>' +
        '<hr>',
      // 用来传递数据的
      props: ['msg', 'changableMsg', 'canChangeParentMsg'],
      data: function () { // 必须是个函数
        return {
          name: 'hello world component'
        }
      },
      methods: {
        notify: function () {
          this.$dispatch('child-msg', 'I am child, can you hear me?')
        }
      },
      events: {
        'parent-msg': function (msg) {
          console.log('接受到msg: %s', msg)
        }
      }
    })

    // 注册
    Vue.component('my-component', MyComponent)
    // 快速注册
    Vue.component('my-component2', {
      template: '#c2' // 只认 id 选择器
    })

    // 异步组件
    Vue.component('async-component', function (resolve, reject) {
      setTimeout(function () {
        resolve({
          template: '<div>I am async!</div>'
        })
      }, 1000)
    })

    // 创建根实例
    new Vue({
      el: '.my-component-wrap',
      data: {
        sth: 'Haha!',
        parMsg: 'aaa'
      },
      events: {
        'child-msg': function (msg) {
          console.log('接受到msg: %s', msg)
          this.$broadcast('parent-msg', 'I am parent. I hear You')
        }
      }
    })
  }
})
module.exports = Component
