<template>
  <div class="wrap">
    <h2>处理边界情况</h2>
    <h3>访问元素 & 组件</h3>
    <pre>
      访问根实例：this.$root，大中型项目，推荐使用Vuex来管理应用的状态。
      访问父组件根实例：this.$parent，推荐使用 依赖注入。
      访问子组件实例或子元素：通过给组件添加一个ref属性（如childname），this.$refs.childname
        注意：$refs只会在组件渲染之后生效，且不是响应式的，所以避免在模板或计算属性中访问$refs。
    </pre>
    <pre>
      依赖注入：祖先组件通过provide选项提供给后代组件的数据/方法；在任何后代组件里，使用inject选项来指定接收想要添加到这个实例上的property。
      注意：inject的property 不是 响应式的，更改了祖先组件里的数据后，后代inject的数据不会更新；也不要试图在后代组件里重新赋值，会报错；。如果有需求，推荐使用Vuex。
    </pre>
    <button @click="handleClick">通过根组件获取当前组件数据</button>
    <button @click="handleParent">访问父组件实例</button>
    <p>
      <button @click="handleInject">通过inject获取依赖注入的数据/方法</button>
      <button @click="updateInject">更改inject数据</button>
    </p>
    <p>
      <input ref="input" type="date" v-model="date">
    </p>
    <pre>
      组件的循环引用：文件目录树：TreeFolder和TreeFolderContents
      注意：
      1、传入TreeFolder的prop是一个对象，传入TreeFolderContents的prop是一个数组
      2、解决办法有2种：一种是在beforeCreate里，另一种是在components选项里动态引入
    </pre>
    <p>
      <tree-folder :folder="folder"></tree-folder>
    </p>
  </div>
</template>

<script>
import Pikaday from 'pikaday'
import TreeFolder from '@/components/TreeFolder.vue'
export default {
  inject: ['getMap', 'map'],
  name: 'DealBoundary',
  components: {
    TreeFolder
  },
  data() {
    return {
      foo: 'foo',
      picker: null,
      date: null,
      folder: {
        name: '根目录',
        children: [
          {
            name: '1',
            children: [
              {
                name: '1-1'
              },
              {
                name: '1-2'
              }
            ]
          },
          {
            name: '2'
          },
          {
            name: '3'
          }
        ]
      }
    }
  },
  methods: {
    handleClick() {
      // const foo = this.$root.$children[0].$children[17].$data.foo
      const foo = this.$root.$data.foo // 在main.js里
      console.log('访问的是main.js里new Vue()，根实例的数据： ', foo)
      const rootComponent = this.$root.$children[0].$data.foo
      console.log('访问的是根组件App.vue里的数据：', rootComponent)
    },
    handleParent() {
      const parent = this.$parent.$data.foo
      const parentParent = this.$parent.$parent.$data.foo
      console.log('$parent', parent)
      console.log('$parent.$parent', parentParent)
    },
    handleInject() {
      this.getMap()
      console.log('数据：', this.map)
    },
    updateInject() {
      // 不是响应式的，不可以这么赋值
      // this.map = '是否更改了inject的数据map？'
      console.log(this.map)
    },
    attachDatepicker: function(refName) {
      var picker = new Pikaday({
        field: this.$refs[refName],
        format: 'YYYY-MM-DD'
      })

      this.$once('hook:beforeDestroy', function() {
        picker.destroy()
      })
    }
  },
  mounted() {
    // this.attachDatepicker('input')
  },
  beforeDestroy() {
  }
}
</script>

<style>
.wrap {
  padding-bottom: 500px;
}
</style>
