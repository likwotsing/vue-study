// <ul v-if="items.length">
//   <li v-for="item in items">{{ item.name }}</li>
// </ul>
// <p v-else>No items found.</p>

module.exports = {
  render(createElement) {
    if (this.items.length) {
      return createElement(
        'ul',
        this.items.map(item => {
          return createElement('li', item.name)
        })
      )
    } else {
      return createElement('p', 'No items found')
    }
  },
  props: {
    items: {
      type: Array
    }
  }
}
