var Vue = require('vue')
var $ = require('jquery')
new Vue({
  el: '.target-wrap',
  ready: function () {
    let $imgWrap = $('.img-wrap')
    let wrapSize = {
      width: $imgWrap.width(),
      height: $imgWrap.height()
    }
    let wrapWidthBiger = wrapSize.width > wrapSize.height
    getImgSize($('.target').attr('src')).then((imgSize) => {
      // this.imgSize = imgSize
      // var imgWidthBiger = imgSize.width > imgSize.height
      // if (wrapWidthBiger === imgWidthBiger) {
      //   $('.target').width('100%')
      // } else {
      // }
    })
  },
  data: {
    rotateDegree: 0
  },
  methods: {
    rotate: function (degree) {
      this.rotateDegree += degree
    }
  },
  computed: {
    rotateStyle: function () {
      // var scale = this.rotateDegree % 180 === 0 ? 1 : .73
      var scale = 1
      return {
        transform: `rotate(${this.rotateDegree}deg) scale(${scale})`
      }
    }
  }
})

function getImgSize (src) {
  return new Promise(function (resolve, reject) {
    $('<img/>', {
      load: function () {
        resolve({
          width: this.width,
          height: this.height
        })
      },
      src: src
    })
  })
}
