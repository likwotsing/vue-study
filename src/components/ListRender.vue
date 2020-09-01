<template>
  <div>
    <h2>列表渲染</h2>
    <pre>
      遍历数组：有2个参数：item, index;
      遍历对象：有3个参数：value, name, index
    </pre>
    <!-- 用v-for把一个数组对应为一组元素 -->
    <ul>
      <li v-for="(item,index) of items" :key="index">
        {{ parentMessage }} - {{ index }} - {{ item }}
      </li>
    </ul>
    <!-- v-for里使用对象 -->
    <pre>v-for里使用对象</pre>
    <ul>
      <li v-for="(value, name, index) in object" :key="value">
        {{ index }} - {{ name }} - {{ value }}
      </li>
    </ul>
    <pre>
      数组更新检测：
      变更方法：push/pop/shift/unshift/reverse/sort/splice,
      除了7个方法外，其他数组的方法都会返回一个新数组
    </pre>
    <pre>
      显示过滤/排序后的结果：可以使用计算属性
    </pre>
    <ul>
      <li v-for="n in evenNumbers" :key="n">
        {{ n }}
      </li>
    </ul>
    <pre>
      不适合计算属性的时候(嵌套for循环)，可以使用方法
    </pre>
    <ul v-for="(set, index) in sets" :key="index">
      <li v-for="n in even(set)" :key="n">
        {{ n }}
      </li>
    </ul>
    <pre>
      v-for可以接受一个整数
    </pre>
    <div>
      <span v-for="n in 3" :key="n">{{ n }}</span>
    </div>
    <pre>
      在组件上使用v-for
    </pre>
    <div>
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">新增一个todo</label>
        <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="请输入todo的名称"
        >
        <button>添加</button>
      </form>
      <ul>
        <li
          is="todo-item"
          v-for="(todo, index) of todos"
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          @remove="handleRemove(index)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  components: {
    TodoItem
  },
  data() {
    return {
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      object: {
        title: 'How todo lists in Vue',
        author: 'andy',
        publishedAt: new Date().toLocaleString()
      },
      numbers: [1, 2, 3, 4, 5],
      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
      newTodoText: '',
      todos: [
        { id: 1, title: '吃饭' },
        { id: 2, title: '睡觉' },
        { id: 3, title: '学习' }
      ],
      nextTodoId: 4
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(c => c % 2 === 0)
    }
  },
  methods: {
    even(c1) {
      return c1.filter(c2 => c2 % 2 === 0)
    },
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    handleRemove(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
