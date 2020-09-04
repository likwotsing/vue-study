import Vue from 'vue'

Vue.directive('obj', (el, binding) => {
  console.log(binding)
})
