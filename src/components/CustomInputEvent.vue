<template>
  <label>
    {{ label }}
    <input
      v-bind="$attrs"
      v-bind:value="value"
      v-on="inputListeners"
    >
  </label>
</template>

<script>
export default {
  props: ['label', 'value'],
  inheritAttrs: false,
  computed: {
    inputListeners() {
      const vm = this
      return Object.assign({},
        this.$listeners, // 从父级添加的所有监听器
        { // 确保配合v-model的工作
          input: function(event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style>

</style>
