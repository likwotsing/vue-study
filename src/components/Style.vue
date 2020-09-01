<template>
  <div>
    <h2>Style样式</h2>
    <pre>
      class和内联样式都是attribute，所以可以使用v-bind处理
    </pre>
    <h3>绑定HTML Class</h3>
    <!-- 对象语法 -->
    <div v-bind:class="{ active: isActive }">对象语法</div>
    <div v-bind:class="{ active: isActive }" class="bg-color">v-bind:class与普通的class共存</div>
    <div v-bind:class="classObject">绑定的class不必定义在模板里</div>
    <!-- 数组语法 -->
    <div v-bind:class="[activeClass, errorClass]">数组语法</div>
    <div v-bind:class="[{active: isActive }, errorClass]">数组语法中使用对象语法</div>
    <!-- 用在组件上 -->
    <my-component class="baz boo" v-bind:class="{ active: isActive }"></my-component>
    <h3>绑定内联样式</h3>
    <!-- 对象语法 -->
    <div v-bind:style="{color: activeColor}">内联样式的对象语法</div>
    <div v-bind:style="styleObject">内联样式直接绑定一个样式对象</div>
    <!-- 数组语法 -->
    <div v-bind:style="[baseStyles, overridengStyles]">将多个样式对象绑定到同一个元素上</div>
    <pre>
      绑定样式对象的数组语法：v-bind:style="[baseStyles, overridengStyles]"，数组元素的先后关系决定了优先级
    </pre>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue'
export default {
  components: {
    MyComponent
  },
  data() {
    return {
      isActive: true,
      classObject: {
        active: true
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      styleObject: {
        color: 'red',
        fontSize: '12px'
      },
      baseStyles: {
        color: 'red'
      },
      overridengStyles: {
        color: 'blue'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
.bg-color {
  background-color: #409EFF;
}
.text-danger {
  font-weight: bold;
}
</style>
