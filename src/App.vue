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
      <router-link to="/component-basic">组件基础</router-link>
      <router-link to="/deep-component">深入了解组件</router-link>
      <router-link to="/prop">Prop</router-link>
      <router-link to="/custom-event">自定义事件</router-link>
      <router-link to="/slot">slot插槽</router-link>
      <router-link to="/async-component">异步组件</router-link>
      <router-link to="/deal-boundary">处理边界情况</router-link>
      <router-link to="/transition-list">进入/离开&列表过渡</router-link>
      <router-link to="/transition-state">状态过渡</router-link>
      <router-link to="/mixin">混入</router-link>
      <router-link to="/custom-directive">自定义指令</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  provide: function() {
    return {
      getMap: this.getMap,
      map: this.map
    }
  },
  data() {
    return {
      foo: 'App.vue里的foo',
      map: 'App.vue里的 map'
    }
  },
  methods: {
    getMap() {
      console.log('方法：App.vue里的 getMap 方法')
    }
  }
}
</script>
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
