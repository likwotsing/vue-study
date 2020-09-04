module.exports = {
  render: function(createElement) {
    const ce = createElement(
      'h' + this.level, // 标签名称
      this.$slots.default // 子节点数组
    )
    console.log('ce', ce)
    return ce
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}
