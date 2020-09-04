import Vue from 'vue'

Vue.directive('focus', {
  // 当被绑定的元素插入到DOM时
  inserted(el) {
    // 聚焦元素
    el.focus()
  }
})
