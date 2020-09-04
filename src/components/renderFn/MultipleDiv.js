module.exports = {
  render(createElement) {
    return createElement(
      'div',
      Array.apply(null, Array(3)).map(() => {
        return createElement('p', 'hi')
      })
    )
  }
}
