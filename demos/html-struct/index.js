var Vue = require('vue')
var Prism = require('prismjs')
new Vue({
  el: '.html-struct',
  ready () {
    this.renderHTML()
  },
  data: {
    isInMobile: false,
    isUseLatest: false
  },
  methods: {
    renderHTML () {
      let mobileMeta = this.isInMobile ? '\n    <meta name="viewport" content="width=device-width, initial-scale=1">' : ''
      let useLatest = this.isUseLatest ? '\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">' : ''
      let html =
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>${mobileMeta}${useLatest}
  </head>
  <body>
    <!--在页面中显示的主体内容 -->
    <div> sth </div>
  </body>
</html>`
      document.querySelector('#code').innerHTML = Prism.highlight(html, Prism.languages.html)
    }
  },
  watch: {
    isInMobile () {
      this.renderHTML()
    },
    isUseLatest () {
      this.renderHTML()
    }
  }
})
