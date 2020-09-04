<template>
  <div>
    <h2>混入</h2>
    <pre>
      先定义一个混入对象，在组件里使用mixins选项使用混入对象。
    </pre>
    <h3>选项合并</h3>
    <pre>
      当组件和混入对象有同名选项时，这些选项将以恰当的方式进行“合并”。
      1、数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
      2、同名钩子函数合并为一个数组，混入对象的钩子 先调用。
      3、值为对象的选项，如methods、components、directives，将合并为一个对象，键名冲突时，取组件对象的键值对。
    </pre>
    <h3>全局混入</h3>
    <pre>
      谨慎使用全局混入，因为它会影响到每个单独创建的Vue实例(包括第三方组件)。
    </pre>
  </div>
</template>

<script>
import myMixin from '@/mixins/myMixin.js'

export default {
  mixins: [myMixin],
  data() {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created() {
    console.log(this.$data)
  }
}
</script>

<style>

</style>
