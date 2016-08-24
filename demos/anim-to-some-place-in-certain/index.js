var $ = require('jquery')
var moveArr = []
$('.dot').each(function () {
  moveArr.push($(this).position())
})
moveWithAnim($('.target'), moveArr, 5000)

function moveWithAnim ($el, posArr, time) {
  move({
    $el: $el,
    posArr: posArr,
    i: 0,
    pos: time / posArr.length
  })
}

function move (opts) {
  var $el = opts.$el
  var posArr = opts.posArr
  var i = opts.i
  var time = opts.time
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
