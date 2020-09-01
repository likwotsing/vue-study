<template>
  <li>
    {{ id }} - {{ title }}
    <button @click="$emit('remove')">移除</button>
  </li>
</template>

<script>
export default {
  props: ['id', 'title']
}
</script>

<style>

</style>
