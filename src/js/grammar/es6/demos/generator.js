runGenerator(simple)
runGenerator(getName)
runGenerator(increace, 5)

function runGenerator (generator, times) {
  var f = generator(times)
  var isDone = false
  var res

  while (!isDone) {
    res = f.next()
    isDone = res.done
    console.log(res.value)
  }
}

function * simple () { // 可以被执行两次
  yield 'first time'
  console.log('run second time')
  return 'second time'
}

function * getName () {
  var name = 'joel'.split('')
  yield name[0]
  console.log('run ' + name[0])
  yield name[1]
  console.log('run ' + name[1])
  yield name[2]
  console.log('run ' + name[2])
  yield name[3]
  console.log('run ' + name[3])
  return name
}

function * increace (max) {
  for (var i = 0; i < max;) {
    i++
    yield i
  }
  return Math.random()
}
