/*
 * 设置 drop 区域
 * drop时能拿到 drag 的元素
 */
$(document).ready(function () {
  $('.drags .draggable').on('dragstart', function (event) {
    var originalEvent = event.originalEvent
    originalEvent.dataTransfer.dropEffect = 'copy'
    $(this).addClass('dragging')
  // 设置拖拽图片。不知道怎么设置尺寸。。。
  // var img = new Image()
  // img.src = 'https://avatars1.githubusercontent.com/u/2120155?v=3&s=460'
  // img.width = 20
  // img.setAttribute('width', 20)
  // img.setAttribute('height', 20)
  // originalEvent.dataTransfer.setDragImage(img, 10, 10)
  // debugger
  // originalEvent.dataTransfer.setData("text/html", "<p>Example paragraph</p>")
  }).on('dragend', function (event) {
    $(this).removeClass('dragging')
  })
  var $dropZone = $('.drop-zone')
  $dropZone.on('drop', function (event) {
    event.preventDefault()
    var $tar = $('.dragging').clone()
    $tar.removeClass('dragging')
    // $tar.prop('draggable', false)
    $dropZone.append($tar)
  }).on('dragover', function (event) {
    // $(this).addClass
    event.preventDefault()
  })

  // https://github.com/RubaXa/Sortable#options
  Sortable.create($dropZone[0], {
    draggable: '.draggable',
    ghostClass: 'placeholer'
  })

// 研究下 sortable
// https://github.com/RubaXa/Sortable
// https://github.com/RubaXa/Sortable/wiki/Sorting-with-the-help-of-HTML5-Drag'n'Drop-API
// $('.drop-zone').on('dragover', '.draggable', function () {
//   var $placeHolder = $('<div>')
//   $placeHolder.addClass('placeholer')
//   $(this).before($placeHolder)
// })
})
