$(document).ready(() => {
  let flag = false

  $('#jellyGo').on('click', function () {
    if (!flag) {
      flag = true
      let $playground = $('#playground')
      $playground.addClass('animation-jelly')
      setTimeout(function () {
        $playground.removeClass('animation-jelly')
        flag = false
      }, 800)
    }
  })
})
