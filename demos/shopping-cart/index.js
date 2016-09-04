var Vue = require('vue')

new Vue({
  el: '.shopping-cart',
  data: {
    goods: [{
      name: '葡萄干',
      price: 20,
      num: 1,
      isChecked: true
    }, {
      name: '牛奶',
      price: 50,
      num: 2,
      isChecked: false
    }],
    isCheckedAll: false
  },
  computed: {
    totalPrice () {
      var checkedGoods = this.goods.filter((item) => {
        return item.isChecked
      })
      var totalPrice = checkedGoods.reduce((prev, curr) => {
        return prev + curr.num * curr.price
      }, 0)
      return totalPrice
    }
  },
  methods: {
    add (item, addNum) {
      item.num = item.num + addNum
      if (item.num === 0) {
        this.goods = this.goods.filter((goodItem) => {
          return goodItem.num !== 0
        })
      }
    },
    checkAll () {
      this.goods = this.goods.map(function (item) {
        item.isChecked = !this.isCheckedAll
        return item
      }.bind(this))
    }
  }
})
