var $ = require('jquery')
$('.block').click(function () {
  var $this = $(this)
  $this.removeClass('anim')
  setTimeout(() => {
    $this.addClass('anim')
    setTimeout(() => {
      $this.toggleClass('block-back')
    }, 250) // 动画到正面宽度为0时，切换背面的样式
  }, 10)
})
