<template>
  <span>
    {{ tweeningValue }}
  </span>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'

export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      tweeningValue: 0
    }
  },
  watch: {
    value: {
      handler: function(newValue, oldValue = 0) { // 给初始值赋值为0
        this.tween(oldValue, newValue)
      },
      immediate: true
    }
  },
  methods: {
    tween(startValue, endValue) {
      var vm = this
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        .onUpdate(function(object) {
          // vm.tweeningValue = this.tweeningValue.toFixed(0)
          // v18版本需要使用object，而不是this(v16版本)
          vm.tweeningValue = object.tweeningValue.toFixed(0)
        })
        .start()

      animate()
    }
  }
}
</script>

<style>

</style>
