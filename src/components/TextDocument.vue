<template>
  <div>
    {{ title }}
    <button @click="handleUpdate">点击更改子组件里的title</button>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      childTitle: '子组件里的title'
    }
  },
  methods: {
    handleUpdate() {
      this.$emit('update:title', this.childTitle)
    }
  }
}
</script>

<style>

</style>
