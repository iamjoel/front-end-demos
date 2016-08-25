var Vue = require('vue')
new Vue({
  el: '.html-struct',
  data: {
    isInMobile: false,
    isUseLatest: false
  },
  computed: {
    html: function () {
      let mobileMeta = this.isInMobile ? '<meta name="viewport" content="width=device-width, initial-scale=1">' : ''
      let useLatest = this.isUseLatest ? '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">' : ''
      return `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <title>Document</title>
                  ${mobileMeta}
                  ${useLatest}
                  </head>
                <body>
                  <!--在页面中显示的主体内容 -->
                  <div> sth </div>
                </body>
              </html>`
    }
  }
})
