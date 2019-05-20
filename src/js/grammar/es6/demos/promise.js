﻿var Vue = require('vue')

var Component = Vue.extend({
  ready () {
    function doThingGenerator (params) {
      var defaultParams = {
        aysn: true,
        successVal: '',
        failVal: '',
        isSuccess: true,
        useTime: 100
      }

      params = Object.assign(defaultParams, params)
      return function () {
        return new Promise(function (resolve, reject) {
          if (params.aysn) {
            setTimeout(function () {
              if (params.isSuccess) {
                console.log('almost ' + params.successVal)
                resolve(params.successVal)
              } else {
                reject(params.failVal)
              }
            }, params.useTime)
          } else {
            if (params.isSuccess) {
              console.log('almost ' + params.successVal)
              resolve(params.successVal)
            } else {
              reject(params.failVal)
            }
          }
        })
      }
    }
    var doThing1 = doThingGenerator({
      successVal: 'thing1 done'
    })

    var doThing2 = doThingGenerator({
      successVal: 'thing2 done',
      useTime: 200
    })

    var doThing3 = doThingGenerator({
      successVal: 'thing3 done',
      useTime: 50
    })

    doThing1().then(function (msg) {
      console.log(msg)
      return doThing2()
    }).then(function (msg) {
      console.log(msg)
      return doThing3()
    }).then(function (msg) {
      console.log(msg)
      console.log('***** 串行结束 ********')

      Promise.all([doThing1(), doThing2(), doThing3()]).then(function (msgs) {
        console.log(msgs.join())
        console.log('***** 并行结束 ********')

        var doThing1Fail = doThingGenerator({
          isSuccess: false,
          failVal: 'thing1 fail'
        })
        doThing1Fail().catch(function (msg) {
          console.log('catch fail: ' + msg)
          doThing1Fail().then(null, function () {
            console.log('catch fail in then: ' + msg)
            console.log('***** 失败处理结束 ********')
            var doThing1Sync = doThingGenerator({
              aysn: false,
              successVal: 'sync thing1 done'
            })
            var doThing2Sync = doThingGenerator({
              aysn: false,
              successVal: 'sync thing2 done'
            })

            doThing1Sync().then(doThing2Sync).then(function (msg) {
              console.log(msg)
              console.log('***** Promise 同步结束 ********')
            })
          })
        })
      })
    })
  }
})
module.exports = Component
