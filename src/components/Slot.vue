<template>
  <div>
    <h2>Slot插槽</h2>
    <p>
      父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
    </p>
    <pre>
      后备内容：父组件里没有传递任何内容的时候，默认使用子组件里的slot元素里的后备内容。
    </pre>
    <submit-button>提交</submit-button>
    <!-- 具名插槽 -->
    <h3>具名插槽</h3>
    <pre>
      slot元素有一个特殊的attribute：name，可以给插槽命名。父组件里使用v-slot:name可以指定对应的name。
      默认插槽：v-slot:default
      v-slot只能添加在tempalte元素上（有1种例外情况：被提供的内容只有默认插槽时，组件的标签才可以被当做插槽的模板来使用，v-slot直接用在组件上。）
    </pre>
    <base-layout>
      <template v-slot:header>
        <h1>这是头部</h1>
      </template>
      <template v-slot:default>
        <p>这是内容1</p>
        <p>这是内容2</p>
      </template>
      <template v-slot:footer>
        <p>这是footer</p>
      </template>
    </base-layout>
    <h3>作用域插槽</h3>
    <p>
      有时候需要让插槽内容能够访问子组件中才有的数据，可以把变量作为slot元素的一个属性，通过v-bind绑定，绑定在slot元素上的attribute被称为 插槽prop。
    </p>
    <current-user>
      <template v-slot:default="slotProps">
        父组件里访问子组件插槽里的firstName：{{ slotProps.user.firstName }}
        <br>
        父组件里访问子组件插槽里的lastName：{{ slotProps.user.lastName }}
      </template>
    </current-user>
    <!-- 独占默认插槽的缩写语法 -->
    <h4>独占默认插槽的缩写语法</h4>
    <pre>
      当被提供的内容只有默认插槽时，组件的标签才可以被当做插槽的模板来使用。
      注意：默认插槽的缩写语法 不能 和具名插槽混用，因为可能会导致作用域不明确。
    </pre>
    <pre>
      {{ slotDefaultAbbr }}
    </pre>
    <p>
      解构插槽Prop：作用域插槽的内部工作原理是将插槽内容包括在一个传入单个参数的函数里，所以v-slot的值可以是任何能够作为函数定义中的参数的JavaScript表达式。所以在支持ES2015的环境下，可以使用解构赋值。
      <pre>
        {{ slotDestructure }}
      </pre>
    </p>
    <h3>动态插槽名</h3>
    <h3>具名插槽的缩写</h3>
    <pre>
      v-slot:的替换字符为: #, v-slot:header可以被重写为： #header
    </pre>
    <p>
      插槽prop允许将插槽转换为可复用的模板，这些模板可以基于输入的prop渲染出不同的内容。
    </p>
    <todo-list :todos="todos">
      <template v-slot:todo="{ todo }">
        <span v-if="todo.isComplete">√</span>
        {{ todo.text }}
      </template>
    </todo-list>
  </div>
</template>

<script>
import SubmitButton from '@/components/SubmitButton.vue'
import BaseLayout from '@/components/BaseLayout.vue'
import CurrentUser from '@/components/CurrentUser.vue'
import TodoList from '@/components/TodoList.vue'
export default {
  components: {
    SubmitButton,
    BaseLayout,
    CurrentUser,
    TodoList
  },
  data() {
    return {
      slotDefaultAbbr: `
      // 缩写语法
      <current-user v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </current-user>
      // 还可以更简单：省略:default
      <current-user v-slot="slotProps">
        {{ slotProps.user.firstName }}
      </current-user>
      `,
      slotDestructure: `
        <current-user v-slot="{ user }">
          {{ user.firstName }}
        </current-user>
        还可以重命名：
        <current-user v-slot="{ user: person }">
          {{ person.firstName }}
        </current-user>
        在插槽prop是undefined的时候，还可以定义后备内容:
        <current-user v-slot="{ user = { firstName: 'aaa' } }">
          {{ user.firstName }}
        </current-user>
      `,
      todos: [
        { id: 1, isComplete: true, text: 'aaa' },
        { id: 2, isComplete: false, text: 'bbb' },
        { id: 3, isComplete: true, text: 'ccc' }
      ]
    }
  }
}
</script>

<style>

</style>
