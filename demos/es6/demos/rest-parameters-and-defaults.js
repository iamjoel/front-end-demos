var defaultParamFn = (name = 'Joel', greet = 'Hello') => {
  console.log('%s, I am %s', greet, name)
}

defaultParamFn()
defaultParamFn('Jack')
defaultParamFn('Jack', 'Hi')

var addFn = (...vals) => {
  return vals.reduce((prev, curr) => {
    return prev + curr
  }, 0)
}

console.log(addFn(1))
console.log(addFn(1, 2, 3))
