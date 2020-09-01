<template>
  <div>
    <h2>计算属性和侦听器</h2>
    <h3>计算属性</h3>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <input v-model="ipt"><button @click="updateMsg">更新computed的值</button>
    <div>
      <p>computedNow: {{ computedNow }}</p>
      <p>methodsNow: {{ methodsNow() }}</p>
      <p>computedNow: {{ computedNow }}</p>
      <p>methodsNow: {{ methodsNow() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello',
      ipt: ''
    }
  },
  computed: {
    reversedMessage: {
      get() {
        return this.message.split('').reverse().join('')
      },
      set(val) {
        this.message = val.split('').reverse().join('')
      }
    },
    computedNow() {
      console.log('访问计算属性的now')
      return Date.now()
    }
  },
  methods: {
    updateMsg() {
      this.reversedMessage = this.ipt
    },
    methodsNow() {
      console.log('访问方法里的now')
      return Date.now()
    }
  }
}
</script>

<style>

</style>
