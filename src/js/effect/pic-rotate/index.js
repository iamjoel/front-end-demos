$(document).ready(() => {
  new Vue({
    el: '.target-wrap',
    ready: function () {
      let $imgWrap = $('.img-wrap')
      let wrapSize = {
        width: $imgWrap.width(),
        height: $imgWrap.height()
      }
      getImgSize($('.target').attr('src')).then(function (imgSize) {
        let imgRatio = imgSize.width / imgSize.height
        let imgW = wrapSize.width
        let imgH = imgW / imgRatio
        if (imgH < wrapSize.height) {
          this.imgSizeInfo.push([wrapSize.width + 'px', 'auto'])
        } else {
          this.imgSizeInfo.push(['auto', wrapSize.height + 'px'])
        }
        // 旋转90度后
        imgW = wrapSize.height
        imgH = imgW / imgRatio
        if (imgH < wrapSize.width) {
          this.imgSizeInfo.push([wrapSize.height + 'px', 'auto'])
        } else {
          this.imgSizeInfo.push(['auto', wrapSize.width + 'px'])
        }

        this.styleObject.width = this.imgSizeInfo[0][0]
        this.styleObject.height = this.imgSizeInfo[0][1]
      }.bind(this))
    },
    data: {
      imgSizeInfo: [],
      styleObject: {
        rotateDegree: 0,
        width: 0,
        height: 0
      },
      rotateDegree: 0
    },
    methods: {
      rotate: function (degree) {
        this.rotateDegree += degree
        this.styleObject.transform = `rotate(${this.rotateDegree}deg)`
        if (this.rotateDegree % 180 === 0) {
          this.styleObject.width = this.imgSizeInfo[0][0]
          this.styleObject.height = this.imgSizeInfo[0][1]
        } else {
          this.styleObject.width = this.imgSizeInfo[1][0]
          this.styleObject.height = this.imgSizeInfo[1][1]
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

})
