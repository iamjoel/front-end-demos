{
  var arr = [1, 2, 3];
  console.log(arr.map(each => each * 2)) // 单个参数不需要括号
  arr.forEach((each, index) => console.log(each, index))
  arr.forEach((each, index) => { // 函数若是多行代码用 {} 包裹
    each = each * 3
    console.log(each, index)
  })

  console.log('----this---- 的测试')
  function Animal(name) {
    this.name = name
    setTimeout(() => {
      console.log(this.name)// 绑定的是外面的this
    })
  }

  var tiger = new Animal('Tiger')
}
