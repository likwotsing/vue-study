<template>
  <div class="wrap">
    <h2>Prop</h2>
    <pre>
      HTML中的attribute是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。
    </pre>
    <pre>
      Prop类型：String，Number, Boolean, Array, Object, Function, Promise
    </pre>
    <pre v-text="transferProp"></pre>
    <p>传入一个对象的所有property</p>
    <pre v-text="objectProperty"></pre>
    <prop-object v-bind="post"></prop-object>
    <!-- 单向数据流 -->
    <pre>
      单项数据流：父级prop的更新会向下流动到子组件中，但反过来则不行。所以不应该在子组件内部改变prop。
      1. 将prop作为本地的prop数据使用，直接在data里定义一个新变量
      2. 以一种原始的值传入且需要转换，使用计算属性computed
    </pre>
    <pre v-text="unidirectionalDataFlow"></pre>

    <h3>Prop验证</h3>
    <pre v-text="propVerify"></pre>
    <p>prop会在组件实例创建之前进行验证，所以实例的property（如data、computed）在defautl或validator是不可以使用的</p>

    <h3>非Prop的Attribuite</h3>
    <pre>
      组件的作者并不总能遇见组件会被应用到怎样的场景，所以组件可以接受任意的attribute，这些attribute会被添加到组件的根元素上。
    </pre>
    <prop-object v-bind="post" :not-prop-attribute="anyAttribute"></prop-object>
    <!-- 禁用Attribute继承 -->
    <pre>
      不希望组件的根元素继承attribute，可以使用inheritAttrs: false。
      同时，使用$attrs指定，手动指定attribute会被赋予哪个元素。
      基础组件经常会用到。
      注意：inheritAttrs: false， 不会影响class和style的绑定。
    </pre>
    <prop-input v-model="propText" required placeholder="请输入信息" class="parentClass"></prop-input>
  </div>
</template>

<script>
import PropObject from '@/components/PropObject.vue'
import PropInput from '@/components/PropInput.vue'
export default {
  components: {
    PropObject,
    PropInput
  },
  data() {
    return {
      transferProp: `
        给prop传入一个静态的值： <blog-post title="this is title"></blog-post>
        通过v-bind动态赋值： <blog-post v-bind:title="post.title"></blog-post>

        传入布尔值：<blog-post is-published></blog-post> // 布尔值没有值的情况下，默认是true
      `,
      objectProperty: `
      想要将一个对象的所有property都作为prop传入，可以使用不带参数的v-bind：
      post: {
        id: 1,
        title: 'post-title'
      }
      <blog-post v-bind="post"></blog-post> 等价于
      <blog-post
        v-bind:id="post.id"
        v-bind:title="post.title"
      >
      子组件使用每一个prop（id、title）接收即可。
      `,
      post: {
        id: 1,
        title: 'This is title'
      },
      unidirectionalDataFlow: `
        子组件里定义一个新变量：
        props: ['initialCounter'],
        data() {
          return {
            counter: this.initialCounter
          }
        }
        使用计算属性computed：
        props: ['size'],
        computed: {
          normalizedSize() {
            return this.size.trim().toLowerCase()
          }
        }
      `,
      propVerify: `
      props: {
        propA: Number, // 基础类型检查，null和undefined会通过任何类型验证
        propB: [String, Number], // 多个可能的类型
        propC: {
          type: String,
          required: true // 必填
        },
        propD: {
          type: Number,
          default: 100 // 默认值
        },
        propE: {
          type: Object,
          default: function() { // 默认值为对象时，必须从工厂函数获取
            return { name: 'andy' }
          }
        },
        propF: {
          validator: function(value) { // 自定义验证函数
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
          }
        }
      }
      `,
      anyAttribute: '会添加到子组件的根元素上',
      propText: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  text-align: left;
}
</style>
