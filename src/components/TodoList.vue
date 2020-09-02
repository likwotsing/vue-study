<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
    >
      <slot name="todo" v-bind:todo="todo">
        <!-- 后备内容 -->
        {{ todo.text }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['todos']
}
</script>

<style>

</style>
