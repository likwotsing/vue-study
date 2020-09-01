<template>
  <div>
    <h2>介绍</h2>
    <div>
      <h3>声明式渲染</h3>
      {{ message }}
    </div>
    <div>
      <h3>绑定元素</h3>
      <span v-bind:title="message">
        鼠标悬停几秒钟查看动态绑定的提示信息
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>

<style>

</style>
