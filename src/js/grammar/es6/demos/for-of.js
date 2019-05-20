var arr = [1, 2, 4, 8]
for (let value of arr) {
  console.log(value)
}

var str = 'abc'
for (let value of str) {
  console.log(value)
}

var man = new Map()
man.set('name', 'Joel')
  .set('age', '18')
  .set('job', 'web Develop')
for (var [key, value] of man) {
  console.log('%s is %s。\n', key, value)
}
