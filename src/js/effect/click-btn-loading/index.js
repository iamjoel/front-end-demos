Vue.component('btn-click-loading', {
  template: `
<button class="btn" :class="{'btn--loading': isLoading}" @click="click">
  <slot name="text">点我</slot>
</button>`,
  props: {
    btnId: {
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      this.$emit('btn-clicked', this.btnId)
    }
  }
})

new Vue({
  el: '.wrap',
  data: {
    btn1: {
      id: 1,
      isLoading: false
    },
    btn2: {
      id: 2,
      isLoading: false
    }
  },
  methods: {
    ['onClick'](btnId) {
      var btn = this['btn' + btnId]

      btn.isLoading = true
      setTimeout(() => {
        btn.isLoading = false
      }, 3000)
    }
  }
})
