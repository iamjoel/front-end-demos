var tags = {
  LEANRN_DEMO: '学习示例',
  EFFECT: '效果',
  ES6: 'ES6',
  HTML5: 'HTML5',
  ALG: '算法',
  VUE: 'vue',
  OTHERS: '其他'
}

var data = [{
  name: 'HTML 基本结构',
  loc: 'html-struct',
  tags: [tags.LEANRN_DEMO]
}, {
  name: 'HTML 常见标签和属性',
  loc: 'html-tag-and-attr',
  tags: [tags.LEANRN_DEMO]
}, {
  name: 'CSS 布局',
  loc: 'css-layout',
  tags: [tags.LEANRN_DEMO]
}, {
  name: 'CSS 属性在线体验',
  loc: 'css-playground',
  tags: [tags.LEANRN_DEMO]
}, {
  name: '你可能不需要 JavaScript',
  loc: 'you-do-not-need-use-js',
  tags: [tags.LEANRN_DEMO]
}, {
  name: '纯 CSS 做苹果',
  loc: 'apple-icon',
  tags: [tags.EFFECT]
}, {
  name: '从中间向上下展开效果',
  loc: 'center-open',
  tags: [tags.EFFECT]
}, {
  name: '用CSS来找出两张图的差异',
  loc: 'img-differ-use-css',
  tags: [tags.EFFECT]
}, {
  name: '响应式导航条',
  loc: 'response-nav-bar',
  tags: [tags.EFFECT]
}, {
  name: '邮票',
  loc: 'stamp',
  tags: [tags.EFFECT]
}, {
  name: '倒计时',
  loc: 'count-time'
}, {
  name: '拖，放和排序',
  loc: 'dnd-and-sortable',
  tags: [tags.LEANRN_DEMO, tags.HTML5]
}, {
  name: 'Promise',
  loc: 'promise',
  tags: [tags.ES6]
}, {
  name: '在固定时间内，以动画的形式，经过若个点，移动到指定位置',
  loc: 'anim-to-some-place-in-certain'
}, {
  name: '算坑可以填多少水',
  loc: 'caculate-hole-size',
  tags: [tags.ALG]
}, {
  name: '图片旋转:在旋转过程中在不变形，宽高不超出父元素',
  loc: 'pic-rotate',
  tags: [tags.EFFECT]
}, {
  name: '按钮点击后，显示 Loading',
  loc: 'click-btn-loading',
  tags: [tags.VUE, tags.EFFECT]
}]
// CSS 图形 TODO
module.exports = {tags, data}
