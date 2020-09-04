var EmptyList = {
  render(createElement) {
    return createElement('p', 'EmptyList...')
  },
  props: {
    items: {
      type: Array
    }
  }
}
var TableList = {
  render(createElement) {
    return createElement('p', 'TableList...')
  },
  props: {
    items: {
      type: Array
    }
  }
}
var OrderedList = {
  render(createElement) {
    return createElement('p', 'OrderedList...')
  },
  props: {
    items: {
      type: Array
    }
  }
}
var UnorderedList = {
  render(createElement) {
    return createElement('p', 'UnorderedList...')
  },
  props: {
    items: {
      type: Array
    }
  }
}

module.exports = {
  functional: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    isOrdered: Boolean
  },
  render(createElement, context) {
    function appropriateListComponent() {
      var items = context.props.items
      if (items.length === 0) {
        return EmptyList
      }
      if (typeof items[0] === 'object') {
        return TableList
      }
      console.log(context.props.isOrdered)
      if (context.props.isOrdered) {
        return OrderedList
      }
      return UnorderedList
    }

    return createElement(
      appropriateListComponent(),
      context.data,
      context.children
    )
  }
}
