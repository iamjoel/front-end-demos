var target = {
  name: 'obj'
}
var logHandler = {
  get: function (target, key) {
    console.log(`${key} 被读取`)
    return target[key]
  },
  set: function (target, key, value) {
    console.log(`${key} 被设置为 ${value}`)
    target[key] = value
    return value
  }
}
var targetWithLog = new Proxy(target, logHandler)
targetWithLog.name // 控制台输出：name 被读取
targetWithLog.name = 'others' // 控制台输出：name 被设置为 others
console.log(target.name) // 控制台输出: others
console.log('**********')

// 虚拟的属性
var person = {
  fisrsName: '张',
  lastName: '小白'
}
var proxyedPerson = new Proxy(person, {
  get: function (target, key) {
    if (key === 'fullName') {
      return [target.fisrsName, target.lastName].join(' ')
    }
    return target[key]
  },
  set: function (target, key, value) {
    if (key === 'fullName') {
      var fullNameInfo = value.split(' ')
      target.fisrsName = fullNameInfo[0]
      target.lastName = fullNameInfo[1]
    } else {
      target[key] = value
    }
    return value
  }
})

console.log('姓:%s, 名:%s, 全名: %s', proxyedPerson.fisrsName, proxyedPerson.lastName, proxyedPerson.fullName) // 姓:张, 名:小白, 全名: 张 小白
proxyedPerson.fullName = '李 小露'
console.log('姓:%s, 名:%s, 全名: %s', proxyedPerson.fisrsName, proxyedPerson.lastName, proxyedPerson.fullName) // 姓:李, 名:小露, 全名: 李 小露
console.log('**********')

// 私有属性
var api = {
  _secret: 'xxxx',
  _otherSec: 'bbb',
  ver: 'v0.0.1'
}

api = new Proxy(api, {
  get: function (target, key) {
    // 以 _ 下划线开头的都认为是 私有的
    if (key.startsWith('_')) {
      console.log('私有变量不能被访问')
      return false
    }
    return target[key]
  },
  set: function (target, key, value) {
    if (key.startsWith('_')) {
      console.log('私有变量不能被修改')
      return false
    }
    target[key] = value
    return value
  },
  has: function (target, key) {
    return key.startsWith('_') ? false : (key in target)
  }
})

api._secret // 私有变量不能被访问
console.log(api.ver) // v0.0.1
// api._otherSec = 3 // 私有变量不能被修改
console.log('_secret' in api) // true
console.log('ver' in api) // false
console.log('**********')

// var sensitiveData = {
//   password: 'xx'
// }

// var revocable = Proxy.revocable(sensitiveData, {
//   get: function (target, key) {
//     console.log('敏感数据')
//     return false
//   },
//   set: function (argument) {
//     console.log('敏感数据')
//   }
// })

// var notTouch = revocable.proxy
// notTouch.sth
// revocable.revoke() // 中断代理
// console.log(notTouch) // 会报错

// 抽离校验模块
function Animal () {
  return createValidator(this, animalValidator)
}
var animalValidator = {
  name: function (name) {
    return typeof name === 'string'
  }
}

function createValidator (target, validator) {
  return new Proxy(target, {
    set: function (target, key, value) {
      if (validator[key]) {
        // 符合验证条件
        if (validator[key](value)) {
          target[key] = value
        } else {
          throw Error(`Cannot set ${key} to ${value}. Invalid.`)
        }
      } else {
        target[key] = value
      }
      return value
    }
  })
}

var dog = new Animal()
dog.name = 'dog'
console.log(dog.name)
dog.name = 123 // Uncaught Error: Cannot set name to 123. Invalid.
