var [a, b] = [1, 2]
;[a, b] = [b, a] // 交换值 so easy
console.log('交换值', a, b)

var [first, second, third] = ['a', 'b', 'c']
console.log('简单赋值', first, second, third)

// 可以嵌套任意多层
var [first2, [second2, third2], forth] = [1, [2, 3], 4]
console.log('嵌套赋值', first2, second2, third2, forth)

var [,, third3] = [1, 2, 'third~']
console.log(third3)

var [head, ...tail] = [1, 2, 3, 4, 5, 6]
console.log(head, tail.map(each => each * 3))

var { foo, bar } = { foo: 'lorem', bar: 'ipsum' }
console.log(foo, bar)

// 默认值
var { foo2 = 'default value' } = {}
console.log(foo2)

var { foo3 = 'default value' } = { foo: 'set value' }
console.log(foo3)

// 对象的解构
var complicatedObj = {
  arrayProp: [
    'Zapp',
    { second: 'Brannigan' }
  ]
}

// 复杂对象的解构
var { arrayProp: [first5, { second5 }] } = complicatedObj
console.log(first5)
// "Zapp"
console.log(second5)
// "Brannigan"

//
var greetFn = ({ name = 'Joel', fav }) => {
  console.log('I am %s, I like %s', name, fav)
}
greetFn({ fav: 'sweety~' })
greetFn({ name: 'Jack', fav: 'banana' })
