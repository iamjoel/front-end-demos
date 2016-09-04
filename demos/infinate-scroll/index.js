var $ = require('jquery')
var $container = $('.container')
$container.append(makeItems(4))
// 元素下方没显示的高度值小于TRIGGER_SCROLL_SIZE时，触发滚动
var TRIGGER_SCROLL_SIZE = 50
var isLoading = false
$container.scroll(() => {
  if (!isLoading) {
    var totalHeight = $container.prop('scrollHeight')
    var scrollTop = $container.scrollTop()
    var height = $container.height()
    if (totalHeight - (height + scrollTop) <= TRIGGER_SCROLL_SIZE) {
      // 加载更多数据
      isLoading = true
      var $loading = makeLoading()
      $container.append($loading)
      setTimeout(() => {
        $loading.remove()
        $container.append(makeItems(4))
        isLoading = false
      }, 2000)
    }
  }
})

function makeItems (num) {
  var html = []
  for (var i = 0; i < num; i++) {
    html.push(makeItem())
  }
  return html.join('')
}

function makeItem () {
  return '<div class="item">item</div>'
}

function makeLoading () {
  var $loading = $('<div class="loading">加载中...</div>')
  return $loading
}
