var $ = require('jquery')
var moveArr = []
$('.dot').each(function () {
  moveArr.push($(this).position())
})
moveWithAnim($('.target'), moveArr, 5000)

function moveWithAnim ($el, posArr, time) {
  move($el, posArr, 0, time / posArr.length)
}

function move ($el, posArr, i, time) {
  var pos = posArr[i]
  $el.animate({
    left: pos.left,
    top: pos.top,
    duration: time
  }, time, function () {
    if (posArr.length - 1 !== i) {
      move($el, posArr, i + 1, time)
    }
  })
}
