<template>
  <div>
    <h2>自定义事件</h2>
    <pre>
      不同于组件和prop，事件名不存在大小写转换的情形。
      推荐：使用kebab-case的事件名。
    </pre>
    <!-- 自定义组件的v-model -->
    <pre>
      自定义组件的v-model：单选框、复选框的输入控件，value对应其实是checked。
      在子组件里使用model设置prop和event的对应的值。
    </pre>
    <custom-checkbox v-model="lovingVue"></custom-checkbox>
    <pre>
      将原生事件绑定到组件：可以使用.native修饰符。
      如果子组件做了重构，那么可能监听函数静默失败，不会达到预期效果。可以使用$listeners处理。
      v-on="$listeners"，$listeners不会监听带.native修饰符的监听器
    </pre>
    <custom-input-event v-on:focus="onFocus" v-model="inputEvent" :label="inputLabel"></custom-input-event>
    <p>inputEvent: {{ inputEvent }}</p>

    <h3>.sync修饰符</h3>
    <pre>
      有时候需要对prop进行双向绑定，但真正的双向绑定会带来维护上的问题。
      推荐使用 update:myPropName的模式触发事件取而代之。
      如对title进行双向绑定:
        子组件中：this.$emit('update:title', newTitle)
        父组件：v-bind:title="title" v-on:update:title="title = $event"

      为了方便，可以使用.sync缩写：v-bind:title.sync="title"
    </pre>
    <p>父组件的title：{{ title }}</p>
    <text-document
      :title="title"
      @update:title="title = $event"
    ></text-document>
  </div>
</template>

<script>
import CustomCheckbox from '@/components/CustomCheckbox.vue'
import CustomInputEvent from '@/components/CustomInputEvent.vue'
import TextDocument from '@/components/TextDocument.vue'
export default {
  components: {
    CustomCheckbox,
    CustomInputEvent,
    TextDocument
  },
  data() {
    return {
      lovingVue: false,
      inputEvent: '',
      inputLabel: 'input获取焦点，控制台查看打印信息',
      title: '这是在使用async的title'
    }
  },
  methods: {
    onFocus() {
      console.log('input focus')
    }
  }
}
</script>

<style>

</style>
