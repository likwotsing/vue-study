<template>
  <button class="btn">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 5px 10px;
  color: #409EFF;
}
</style>
