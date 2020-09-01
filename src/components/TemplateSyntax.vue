<template>
  <div>
    <h2>模板语法</h2>
    <h3>插值</h3>
    <!-- 文本 -->
    <span>Message: {{ msg }} </span>
    <!-- 原始HTML -->
    <p v-html="rawHtml"></p>
    <!-- attribute -->
    <pre>对于布尔attribute，只要存在就为true</pre>
    <button v-bind:disabled="isButtonDisabled">按钮</button>
    <!-- javascript表达式 -->
    <p>
      {{ number + 1 }}
    </p>
    <h3>指令</h3>
    <!-- 参数 -->
    <a v-bind:href="url">v-bind参数</a> |
    <a v-on:click="doSomthing">v-on参数</a>
    <!-- 动态参数 -->
    <br>
    <a v-bind:[dynamicParam]="url">v-bind动态绑定参数</a>
    <!-- 修饰符 -->
    <p>修饰符(modifier)是以半角句号.指明的特殊后缀</p>
    <h3>缩写</h3>
    <p>v-bind的缩写是冒号:, v-on的缩写是@</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '消息',
      rawHtml: '<span style="color:red">这是红色字体</span>',
      isButtonDisabled: false,
      number: 1,
      url: 'https://www.baidu.com',
      dynamicParam: 'href'
    }
  },
  methods: {
    doSomthing() {
      console.log('do sth')
    }
  }
}
</script>

<style>

</style>
