  // 每次都要执行
function queueCall (fn, time) {
  time = time || 200
  var argsArr = [] // 执行方法的队列
  setInterval(function () { // 模拟异步
    if (argsArr.length === 0) {
      return
    }
    var args = argsArr.shift()
    fn.apply(fn, args)
  }, time)
  return function () {
    argsArr.push(arguments)
  }
}

var signIn = function (name) {
  console.log('sign in. name: ' + name)
}

signIn = queueCall(signIn, 1000)

;['joel', 'jack', 'tom', 'jerry', 'jim'].forEach(function (name) {
  signIn(name)
})

// 只执行最近的一次
function throttle (fn, time) {
  time = time || 200
  var runId = null
  return function () {
    var args = arguments
    clearTimeout(runId) // 把之前没执行的给去掉
    runId = setTimeout(function () {
      fn.apply(fn, args)
    }, time)
  }
}

var search = function (val) {
  $.ajax({
    url: 'error' // 404的地址，为了让代码进fail方法
  }).fail(function () {
    console.log(val)
  })
}

search = throttle(search, 500)

$('#input').keyup(function () {
  search($(this).val())
})
