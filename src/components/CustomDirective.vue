<template>
  <div class="wrap">
    <h2>自定义指令</h2>
    <pre>
      在Vue中，代码服用和抽象的主要形式是组件。
      有的情况下，仍然需要对DOM元素进行底层操作，这时就会用到自定义指令。
    </pre>
    <input v-focus>
    <h3>钩子函数及其参数</h3>
    <div v-demo:foo.a.b="message"></div>
    <h4>动态指令参数</h4>
    <div>
      <p>Scroll down the page</p>
      <!-- <p v-pin="200">Stick me 200px from the top of the page</p> -->
      <p v-pin:[direction]="100" v-pin:[direction2]="100">Stick me 200px from the top of the page</p>
    </div>
    <pre>
      如果指令需要多个值，可以传入一个JavaScript对象字面量
    </pre>
    <p v-obj="obj"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello!',
      direction: 'left',
      direction2: 'top',
      obj: {
        name: 'andy',
        age: 20
      }
    }
  }
}
</script>

<style scoped>
.wrap {
  padding-bottom: 300px;
}
</style>
