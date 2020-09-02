<template>
  <label>
    {{ label }}
    <input
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  props: ['label', 'value'],
  // 根元素不会继承attribute
  inheritAttrs: false
}
</script>

<style>

</style>
