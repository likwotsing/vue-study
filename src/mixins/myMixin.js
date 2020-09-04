module.exports = {
  data() {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}
