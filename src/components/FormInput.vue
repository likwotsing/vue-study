<template>
  <div>
    <h2>表单输入绑定</h2>
    <h3>基础用法</h3>
    <pre>
      v-model指令在input、textarea、select元素上创建双向数据绑定。
      v-model：本质上是语法糖，负责监听用户输入事件以及更新数据
    </pre>
    <pre>
      v-model为不同的元素使用不同的property，并抛出不同的事件：
      text/textarea：使用value和input事件
      checkbox/radio：使用checked和change事件
      select：使用value和change事件
    </pre>
    <!-- 文本 -->
    <input v-model="message">
    <p>Message is: {{ message }}</p>
    <!-- 多行文本 -->
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message"></textarea>
    <pre>在textarea元素中间使用插值文本插入 text 变量并不会生效，需要使用v-model</pre>
    <!-- 复选框 -->
    <pre>复选框</pre>
    <pre>
      单个复选框：绑定到布尔值
      多个复选框：绑定到同一个数组
    </pre>
    <input type="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <!-- 多个复选框 -->
    <pre>
      多个复选框，绑定到同一个数组, input的value属性是数组里的显示的值
    </pre>
    <input type="checkbox" v-model="checkedNames" id="jack" value="Jack">
    <label for="jack">Jack</label>
    <input type="checkbox" v-model="checkedNames" id="john" value="Jonh">
    <label for="john">John</label>
    <input type="checkbox" v-model="checkedNames" id="mike" value="Mike">
    <label for="mike">Mike</label>
    <p>Checked names: {{ checkedNames }}</p>
    <!-- 单选按钮 -->
    <pre>单选按钮</pre>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <p>Picked: {{ picked }}</p>
    <!-- 选择框 -->
    <pre>选择框</pre>
    <select v-model="selected">
      <option value="" disabled>请选择</option>
      <option value="1">A</option>
      <option value="2">B</option>
      <option value="3">C</option>
    </select>
    <p>Selected: {{ selected }}</p>
    <pre>
      select多选时，绑定到一个数组
    </pre>
    <select v-model="selected2" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>selected2: {{ selected2 }}</p>
    <!-- 使用v-for动态渲染 -->
    <pre>
      使用v-for动态渲染，可以使用method添加一个“请选择”的项
    </pre>
    <select v-model="selected3">
      <option
        v-for="option of options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >{{ option.text }}</option>
    </select>
    <p>selected3: {{ selected3 }}</p>
    <!-- 值绑定 -->
    <h3>值绑定</h3>
    <p>对于单选按钮、复选框、选择框，v-model绑定的值通常是静态字符串（单个复选框也可以是布尔值）</p>
    <pre v-text="valueHtml"></pre>
    <pre>
      如果需要把v-model的值绑定到一个变量上，可以使用v-bind实现
    </pre>
    <!-- 复选框 -->
    <pre>复选框</pre>
    <input
      type="checkbox"
      v-model="toggle"
      true-value="yes"
      false-value="no"
    >
    <!-- 单选 -->
    <pre>单选按钮：选中的时候，pick的值是变量radioValue的值</pre>
    <input type="radio" v-model="pick" v-bind:value="radioValue">
    <!-- 选择框 -->
    <pre>选择框</pre>
    <select v-model="selected">
      <option v-bind:value="optionObject">123</option>
    </select>
    <h3>修饰符</h3>
    <pre>
      .lazy：v-model在每次input事件触发后将输入框的值与数据进行同步。可以使用.lazy修饰符，变为在change事件之后同步。
      .number：将用户输入的值转为数值类型，v-model.number='age'
      .trim：过滤用户输入的首尾空白字符, v-model.trim='msg'
    </pre>
    <input v-model.number="age">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      selected2: [],
      selected3: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      valueHtml: `
        当选中时，picked的值为字符串'a'
        <input type="radio" v-model="picked" value="a">
        toggle为true或false
        <input type="checkbox" v-model="toggle">
        当选中第一个选项时，selected的值为字符串'abc'
        <select v-model="selected">
          <option value="abc>ABC</option>
        </select>
      `,
      toggle: '',
      pick: '',
      radioValue: 'aaa',
      optionObject: {
        name: 'andy'
      },
      age: ''
    }
  },
  methods: {
    formatOptions() {
      this.options.unshift({
        text: '请选择',
        value: '',
        disabled: true
      })
    }
  },
  mounted() {
    this.formatOptions()
  }
}
</script>

<style>

</style>
