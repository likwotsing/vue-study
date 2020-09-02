<template>
  <span>
    <slot v-bind:user="user">
      {{ user.lastName }}
    </slot>
  </span>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'andy',
        lastName: 'bob'
      }
    }
  }
}
</script>

<style>

</style>
