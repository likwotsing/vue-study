module.exports = {
  render(createElement) {
    var self = this
    return createElement(
      'input',
      {
        domProps: {
          value: self.value
        },
        on: {
          input(event) {
            self.$emit('input', event.target.value)
          }
        }
      }
    )
  },
  props: ['value']
}
