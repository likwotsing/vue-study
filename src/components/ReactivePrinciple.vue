<template>
  <div class="wrap">
    <h2>响应式原理</h2>
    <p>
      Vue会遍历实例的data选项，并使用 Object.defineProperty 把这些property全部转为getter/setter。Object.defineProperty是ES5中无法shim的特性，所以Vue不支持IE8及更低版本。
    </p>
    <p>
      每个组件实例都对应一个watcher实例，它会在组件渲染的过程中把"接触"过的数据property记录为依赖。当依赖的setter触发时，会通知watcher，从而使它关联的组件重新渲染。
    </p>
    <h3>监测变化的注意事项</h3>
    <h4>对象</h4>
    <pre>
      添加响应式属性：
      Vue.set(obj, propertyName, value)
      vm.$set(obj, propertyName, value)
      如果有多个属性需要添加，使用Object.assign：
      this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
    </pre>
    <h4>数组</h4>
    <pre>
      不能检测以下2种情况的数组变动：
      1、利用索引直接设置一个数据项：vm.items[indexOfItem] =  newValue
      2、修改数组的长度时，vm.items.length = newLength

      对于第1种情况，有3种方法可以解决：
      Vue.set(vm.items, indexOfItem, newValue)
      vm.$set(vm.items, indexOfItem, newValue)
      vm.items.splice(indexOfItem, 1, newValue)

      对于第2种情况：
      vm.items.splice(newLength)
    </pre>
    <button @click="changeLength">更新数组长度</button>
    <h3>异步更新队列</h3>
    <p>
      Vue在更新DOM时是 异步 执行的。只要侦听到数据变化，Vue将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个watcher被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和DOM操作是非常重要的。然后，在下一次的事件循环tick中，Vue刷新队列并执行实际(已去重的)工作。Vue在内部对异步队列尝试使用原生的Promise.then、MutationObserver和setImmediate，如果执行环境不支持，则会采用setTimeout(fn, 0)代替。
    </p>
    <p ref="update-p">{{ message }}</p>
    <button @click="updateMessage">异步更新DOM</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['a', 'b', 'c'],
      message: '未更新'
    }
  },
  methods: {
    changeLength() {
      this.items.splice(2)
      console.log(this.items)
    },
    updateMessage() {
      this.message = '已更新'
      console.log(this.$refs['update-p'].textContent) // 未更新
      this.$nextTick(() => {
        console.log(this.$refs['update-p'].textContent) // 已更新
      })
    }
  }
}
</script>

<style scoped>
.wrap {
  width: 500px;
  margin: 0 auto;
}
</style>
