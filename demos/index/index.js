var Vue = require('vue')
var demosInfo = require('./demo-data')

new Vue({
  el: '.demos',
  data: {
    demos: demosInfo.data,
    tags: {},
    filterTags: []
  },
  created () {
    this.demos = this.demos.map((demo) => {
      if (!demo.tags || !demo.tags.length === 0) {
        demo.tags = ['其他']
      }
      return demo
    })
    this.demos.forEach(function (demo) {
      demo.tags.forEach(function (tagName) {
        if (this.tags[tagName]) {
          this.tags[tagName].num += 1
        } else {
          this.tags[tagName] = {
            name: tagName,
            num: 1
          }
        }
      }.bind(this))
    }.bind(this))
  },
  computed: {
    tagsInfo () {
      var info = []
      for (var key in this.tags) {
        if (typeof key === 'string') {
          let eachTag = this.tags[key]
          info.push({
            id: eachTag.name,
            msg: `${eachTag.name}(${eachTag.num})`,
            num: eachTag.num
          })
        }
      }
      // 降序
      info.sort(function (a, b) {
        return b.num - a.num
      })
      return info
    }
  },
  methods: {
    filter (tagId) {
      if (!tagId) {
        this.filterTags = []
      } else {
        if (this.filterTags.indexOf(tagId) > -1) {
          this.filterTags = this.filterTags.filter((each) => {
            return each !== tagId
          })
        } else {
          this.filterTags.push(tagId)
        }
      }
    }
  },
  filters: {
    filterDemos () {
      if (this.filterTags.length === 0) {
        return this.demos
      }
      var res = this.demos.filter(function (demo) {
        var isInclude = false
        demo.tags.forEach(function (tagId) {
          if (this.filterTags.indexOf(tagId) > -1) {
            isInclude = true
          }
        }.bind(this))
        return isInclude
      }.bind(this))
      return res
    }
  }
})
