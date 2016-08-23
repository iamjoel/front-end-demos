// 试着自己实现 jQuery 的 Deferred
var $ = require('jquery')
var Deferred = function () {
  var deferred = {}
  var promise = {
    then: function (done) {
      var returnedPromise
      deferred.resolve = function (data) {
        if (done && $.isFunction(done)) {
          returnedPromise = done(data)
        }
      }
      if (returnedPromise && $.isFunction(returnedPromise)) {
        returnedPromise.resolve = function () {

        }
      }
      return Deferred()
    },
    promise: function () {
      return promise
    }
  }
  $.extend(deferred, promise)
  return deferred
}

// function a () {
//   var dfd = new Deferred()
//   setTimeout(function () {
//     dfd.resolve('a')
//   }, 100)
//   return dfd.promise()
// }

// function b (data) {
//   var dfd = new Deferred()
//   console.log(data)
//   setTimeout(function () {
//     dfd.resolve('b')
//   }, 100)
//   return dfd.promise()
// }

// function c () {
//   console.log('c')
// }

// a().then(b).then(c)
