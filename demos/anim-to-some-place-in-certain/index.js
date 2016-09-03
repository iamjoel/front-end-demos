var $ = require('jquery')
var $targets = $('.dot')
var $movePoint = $('.target')
const DURATION = 1000

var moveChain = moveTo($movePoint, $targets.eq(0).position(), DURATION)
$targets.filter(':not(:first-child)').each(function (index) {
  let $target = $(this)
  moveChain = moveChain.then(() => {
    moveTo($movePoint, $target.position(), DURATION)
  })
})

function moveTo ($el, position, duration) {
  return new Promise((resolve) => {
    $el.animate(position, duration, resolve)
  })
}

