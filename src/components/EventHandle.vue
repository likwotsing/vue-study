<template>
  <div>
    <h2>事件处理</h2>
    <pre>监听事件</pre>
    <button @click="handleCounter">add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>

    <pre>
      内联处理器中的方法, 若需要访问原始的DOM事件，可以用特殊变量$event传入方法中
    </pre>
    <button  @click="say('hi', $event)">Say hi</button>
    <button  @click="say('hello')">Say hello</button>

    <pre v-text="eventModifier"></pre>
    <p>修饰符顺序很重要，v-on:click.prevent.self会阻止所有的点击，而v-on:click.self.prevent只会阻止元素自身的点击</p>
    <pre>
      按键修饰符：.enter, .tab, .delete(删除和退格键), .esc, .space, .up, .down, .left, .right
    </pre>
    <pre>
      系统修饰符：.ctrl, .alt, .shift, .meta
    </pre>
    <pre>
      鼠标按钮修饰符：.left, .right, .middle
    </pre>
  </div>
</template>s

<script>
export default {
  data() {
    return {
      counter: 0,
      eventModifier: `
      事件修饰符：.stop, .prevent, .capture, .self, .once, .passive
      <a v-on:click.stop="todo"></a> 阻止单击事件继续传播
      <form v-on:submit.prevent="submit"></form> 提交事件不再重载页面
      <a v-on:click.stop.prevent></a> 修饰符可以串联
      <form v-on:submit.prevent></form> 只有修饰符
      <div v-on:click.capture="todo">child</div> 使用捕获模式添加事件监听器
      <div v-on:click.self="todo">...</div> 只有当event.target是当前元素自身时才会触发处理函数
      <div v-on:scroll.passive="onScroll">..</div> 默认滚动行为将会立刻触发，而不会等待onScroll完成，.passive会告诉浏览器不想阻止事件的默认行为，不要和.prevent一起使用, .prevent将会被忽略
      `
    }
  },
  methods: {
    handleCounter() {
      this.counter += 1
    },
    say(msg, e) {
      if (e) {
        e.preventDefault()
      }
      console.log(msg)
    }
  }
}
</script>

<style>

</style>
