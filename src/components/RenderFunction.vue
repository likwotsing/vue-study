<template>
  <div class="wrap">
    <h2>渲染函数 & JSX</h2>
    <pre>
      渲染函数 比模板 更接近编译器。效果相同，但渲染函数更简洁。
      使用模板：AnchoredHeading.vue
      使用渲染函数：AnchoredHeading.js
    </pre>
    <anchored-heading :level="1">Hello World！</anchored-heading>
    <anchored-heading :level="2">Hello World！</anchored-heading>
    <anchored-heading :level="3">Hello World！</anchored-heading>
    <anchored-heading :level="4">Hello World！</anchored-heading>
    <anchored-heading :level="5">Hello World！</anchored-heading>
    <anchored-heading :level="6">Hello World！</anchored-heading>
    <h3>节点、树及虚拟DOM</h3>
    <pre>
      CreateElement返回的是一个对象(描述)，包含的信息会告诉Vue页面上需要渲染什么样的节点，包括子节点的描述信息。
      这样的节点描述称为"虚拟节点"(Virtual Node), 简写为VNode。
      虚拟DOM 是对Vue组件树构建起来的整个VNode树的称呼。
    </pre>
    <pre>
      组件树中所有VNode必须是唯一的。
      如果需要重复渲染很次的元素/组件，可以使用工厂函数。
    </pre>
    <multiple-div></multiple-div>
    <h3>使用JavaScript代替模板功能</h3>
    <if-for :items="items"></if-for>
    <pre>
      渲染函数中没有于v-model的直接对应，需要手动实现相应的逻辑
    </pre>
    <model v-model="ipt"></model>
    {{ ipt }}
    <h4>渲染函数中的：插槽</h4>
    <pre>
      通过this.$slots访问静态插槽的内容，每个插槽都是一个VNode数组。
      通过this.$scopedSlots访问作用域插槽，每个作用域插槽都是一个返回若干VNode的函数。
    </pre>
    <h3>函数式组件</h3>
    <pre>
      AnchoredHeading组件是比较简单，没有管理任何状态，也没有监听任何传递给它的状态，也没有生命周期方法。
      只是一个接受一些prop的函数，这样的情况下，可以将组件标记为functional。
      标记为functional的组件，无状态(没有响应式数据)，也没有实例(没有this上下文)
    </pre>
    <smart-list :items="items"></smart-list>
    <smart-list :items="[]" isOrdered></smart-list>
    <smart-list :items="[1,2,3]" isOrdered></smart-list>
    <smart-list :items="[1,2,3]"></smart-list>
    <h4>向子元素或子组件传递attribute和事件</h4>
    <pre>
      在普通组件中，没有定义为prop的attribute会自动添加到组件的根元素上，将已有的同名attribute进行替换或与其他进行智能合并。
      但是，函数式组件需要显式定义该行为。
    </pre>
    <pre v-text="fnAttr"></pre>
    <p>
      通过createElement传入 context.data 作为第2个参数，就把my-functional-button上面所有的attribute和事件监听器都传递下去了。
      <pre>
        如果使用的是基于模板的函数式组件，那么还需要手动添加attribute和监听器。由于可以
        访问到其独立的上下文内容，所以可以使用 data.$attrs 传递所有的HTML attribute，
        使用 listeners(即data.on的别名)传递任何事件监听器。
      </pre>
      <pre>
        {{ templateAttr }}
      </pre>
    </p>
    <h4>slots和children的区别</h4>
    <pre v-text="slotsAndChildren"></pre>
    <pre>
      对于 my-functional-component组件：
        children会传递2个段落标签
        slotes().default只会传递第2个匿名段落标签
        slots().foo会传递第1个具名段落标签。
    </pre>
    <h3>模板编译</h3>
    <p>
      注意引入的Vue，需要是带编译的版本
    </p>
    <div>
      <textarea v-model="templateText" rows="10" cols="50"></textarea>
      <div v-if="typeof result === 'object'">
        <label>render:</label>
        <pre><code>{{ result.render }}</code></pre>
        <label>staticRenderFns:</label>
        <pre
          v-for="(fn, index) in result.staticRenderFns"
          :key="index"
        ><code>_m({{ index }}): {{ fn }}</code></pre>
        <pre
          v-if="!result.staticRenderFns.length"
        ><code>{{ result.staticRenderFns }}</code></pre>
      </div>
      <div v-else>
        <label>Compilation Error:</label>
        <pre><code>{{ result }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
// import AnchoredHeading from '@/components/renderFn/AnchoredHeading.js'
import AnchoredHeading from '@/components/renderFn/AnchoredHeading2.js'
// import AnchoredHeading from '@/components/AnchoredHeading.vue'
import MultipleDiv from '@/components/renderFn/MultipleDiv.js'
import IfFor from '@/components/renderFn/IfFor.js'
import Model from '@/components/renderFn/Model.js'
import SmartList from '@/components/renderFn/SmartList.js'
import Vue from '../../node_modules/vue/dist/vue.js'

export default {
  components: {
    AnchoredHeading,
    MultipleDiv,
    IfFor,
    Model,
    SmartList
  },
  data() {
    return {
      items: [
        { id: 1, name: 'andy' },
        { id: 2, name: 'bob' },
        { id: 3, name: 'carl' }
      ],
      ipt: '',
      fnAttr: `
        Vue.component('my-functional-button', {
          functional: true,
          render: function (createElement, context) {
            // 完全透传任何 attribute、事件监听器、子节点等。
            return createElement('button', context.data, context.children)
          }
        })
      `,
      templateAttr: `
        <template functional>
          <button
            class="btn btn-primary"
            v-bind="data.attrs"
            v-on="listeners"
          >
            <slot/>
          </button>
        </template>
      `,
      slotsAndChildren: `
      <my-functional-component>
        <p v-slot:foo>
          first
        </p>
        <p>second</p>
      </my-functional-component>
      `,
      templateText: `
        <div>
          <header>
            <h1>I'm a template!</h1>
          </header>
          <p v-if="message">{{ message }}</p>
          <p v-else>No message.</p>
        </div>
      `
    }
  },
  computed: {
    result: function() {
      if (!this.templateText) {
        return 'Enter a valid template above'
      }

      try {
        var result = Vue.compile(
          this.templateText.replace(/\s{2,}/g, '')
        )

        return {
          render: this.formatFunction(result.render),
          staticRenderFns: result.staticRenderFns.map(this.formatFunction)
        }
      } catch (error) {
        return error.message
      }
    }
  },
  methods: {
    formatFunction: function(fn) {
      return fn.toString().replace(/(\{\n)(\S)/, '$1  $2')
    }
  }
}
</script>

<style scoped>
.wrap {
  width: 500px;
  margin: 0 auto;
  text-align: left;
}

pre {
  padding: 10px;
  overflow-x: auto;
  background: #f2f2f2;
}

code {
  white-space: pre;
  padding: 0;
}

code,
pre,
textarea {
  font-family: "Roboto Mono", Monaco, courier, monospace;
}

textarea {
  width: 100%;
  font-size: 14px;
  margin-bottom: 8px;
  border-color: #bbb;
  padding: 8px;
  border-bottom-width: 2px;
  outline: none;
  color: #34495e;
}

textarea:focus {
  background: lightyellow;
}
</style>
