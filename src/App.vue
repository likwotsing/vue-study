<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/introduce">介绍</router-link>
      <router-link to="/template-syntax">模板语法</router-link>
      <router-link to="/compute">计算属性和侦听器</router-link>
      <router-link to="/style">样式</router-link>
      <router-link to="/condition-render">条件渲染</router-link>
      <router-link to="/list-render">列表渲染</router-link>
      <router-link to="/event-handle">事件处理</router-link>
      <router-link to="/form-input">表单输入绑定</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
