var getChildrenTextContent = function(children) {
  return children.map(node => {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}
module.exports = {
  render(createElement) {
    // 穿件kebab-case风格的ID
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')

    return createElement(
      'h' + this.level,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}
