<template>
  <input
    type="checkbox"
    :checked11111="checked"
    @change="$emit('change11111', $event.target.checked)"
  >
</template>

<script>
export default {
  model: {
    prop: 'checked11111',
    event: 'change11111'
  },
  props: {
    checked: Boolean
  }
}
</script>

<style>

</style>
