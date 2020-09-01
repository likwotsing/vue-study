<template>
  <div>
    <h2>条件渲染</h2>
    <h3>v-if</h3>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <!-- https://emojipedia.org/ -->
    <h1 v-else>Oh no 😢</h1>
    <pre>
      因为v-if是一个指令，所以必须添加到元素上。如果想切换多个元素，可以使用template元素包裹下，渲染的时候template并不会渲染
    </pre>
    <template v-if="ok">
      <h1>Ttile</h1>
      <p>Paragraph1</p>
      <p>Paragraph2</p>
    </template>
    <div v-else>看不见</div>
    <!-- key管理可复用的元素 -->
    <h3>使用key管理可复用的元素</h3>
    <template v-if="loginType === 'username'">
      <label>用户名：</label>
      <input placeholder="请输入用户名" key="username-input">
    </template>
    <template v-else>
      <label>邮箱：</label>
      <input placeholder="请输入邮箱" key="useremail-input">
    </template>
    <button @click="toggleLogintype">切换登录方式</button>
    <!-- v-show -->
    <pre>
      v-show:不支持template，也不支持v-else，始终渲染，只是切换display属性
    </pre>
    <template v-show="!ok">
      <h1>Ttile</h1>
      <p>Paragraph1</p>
      <p>Paragraph2</p>
    </template>
    <pre>
      v-if和v-for不推荐一起使用，如果一起使用了，v-for的优先级高
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: true,
      ok: true,
      loginType: 'username'
    }
  },
  methods: {
    toggleLogintype() {
      this.loginType = this.loginType === 'username' ? '' : 'username'
    }
  }
}
</script>

<style>

</style>
