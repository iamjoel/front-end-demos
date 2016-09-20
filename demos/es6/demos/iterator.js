var obj = {
  val: ['a', 'b', 'c'],
  [Symbol.iterator]: () => { // 实现迭代器
    var index = -1
    return {
      next: () => {
        index++
        return {
          value: obj.val[index],
          done: index >= obj.val.length
        }
      }
    }
  }
}

for (var value of obj) {
  console.log(value)
}
