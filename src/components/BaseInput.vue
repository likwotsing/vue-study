<template>
  <input
    class="ipt"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="scss" scoped>
.ipt {
  color: red;
}
</style>
