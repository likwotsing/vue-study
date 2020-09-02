<template>
  <div>
    <h2>深入了解组件</h2>
    <h3>基础组件的自动化全局注册</h3>
    <p>可能许多组件只是包含了一个输入框或按钮之类的元素，是相对通用的，称为基础组件，会在各个组件中被频繁用到。</p>
    <pre>
      可以使用require.context只全局注册这些非常通用的基础组件。
      全局注册的行为：必须在根Vue实例（通过new Vue）创建之前发生。
    </pre>
    BaseInput：<base-input v-model="inputText"></base-input>
    <p>inputText: {{ inputText }}</p>
    BaseButton：<base-button :name="inputText"></base-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    }
  }
}
</script>

<style>

</style>
