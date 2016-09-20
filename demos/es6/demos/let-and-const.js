function testLet () {
  var inIf
  var _inIf
  if (true) {
    let inIf = 'hello outter~' // 编译后的 js 会重命名变量名字
    console.log(inIf)
  }

  console.log(inIf)
  console.log(_inIf)
}
testLet()

const MAX_LEN = 10
// MAX_LEN++// 编译的时候报错
console.log(MAX_LEN)
