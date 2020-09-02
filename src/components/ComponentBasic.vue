<template>
  <div>
    <h2>组件基础</h2>
    <!-- 基本实例 -->
    <pre>
      基本实例
      组件的复用：每个组件都会各自独立维护它的count。因为每用一次组件，就会有一个新实例被创建。
    </pre>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <pre>
      通过props向子组件传递数据
    </pre>
    <!-- <blog-post
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
    ></blog-post> -->
    <!-- 单个根元素 -->
    <pre>
      每个组件必须只有一个根元素，如果给每个相关的信息定义一个prop的时候，如：标题、内容、发布日期、评论，会比较麻烦，可以传递post对象
    </pre>
    <!-- 监听子组件事件 -->
    <pre>
      监听子组件事件：
      父组件可以像处理native DOM事件一样通过v-on监听子组件实例的任意事件；
      子组件可以通过调用内建的$emit方法并传入事件名称来触发事件
    </pre>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
        v-for="post of posts"
        :key="post.id"
        :post="post"
        v-on:enlarge-text="postFontSize += $event"
      ></blog-post>
      <!-- 使用事件抛出一个值 -->
      <pre>
        使用事件抛出一个值：
        子组件里可以使用$emit的第2个参数抛出一个值，父组件里可以通过$event访问到被抛出的值
        或者：若父组件的事件处理函数是一个方法，那么抛出的值将会作为第一个参数传入这个方法
      </pre>
      <!-- 在组件上使用v-model -->
      <h3>在组件上使用v-model</h3>
      <pre v-text="VModel"></pre>
      <p>用在组件上时，v-model则会这样</p>
      <pre v-text="componentVModel"></pre>
      <pre>
        为了让v-model正常工作，组件内的input元素必须：
        1、将其value属性绑定到一个名叫value的prop上
        2、在其input事件被触发时，将新的值通过自定义的input事件抛出
        请查看CustomInput组件的具体实现
      </pre>
      <custom-input v-model="searchText"></custom-input>
      <p>{{ searchText }}</p>

      <h3>通过插槽分发内容</h3>
      <alert-box>插槽内容会填充到子组件的slot元素中</alert-box>
      <h3>动态组件</h3>
      <pre>
        在不同组件之间进行切换是非常有用的，如在一个多标签的界面里
      </pre>
      <div class="dynamic-component">
        <button @click="changeTabComponent('DynamicHome')">DynamicHome</button><button  @click="changeTabComponent('DynamicPosts')">DynamicPosts</button><button @click="changeTabComponent('DynamicArchive')">DynamicArchive</button>
        <component v-bind:is="currentTabComponent"></component>
      </div>
      <pre>
        解析DOM模板时的注意事项：
        有些HTML元素，如ul、ol、table、select，对于出现在其内部的元素是有限制的，
        <pre v-text="componentNote"></pre>
      </pre>
    </div>
  </div>
</template>

<script>
import ButtonCounter from '@/components/ButtonCounter.vue'
import BlogPost from '@/components/BlogPost.vue'
import CustomInput from '@/components/CustomInput.vue'
import AlertBox from '@/components/AlertBox.vue'
import DynamicHome from '@/components/DynamicHome.vue'
import DynamicPosts from '@/components/DynamicPosts.vue'
import DynamicArchive from '@/components/DynamicArchive.vue'
export default {
  components: {
    ButtonCounter,
    BlogPost,
    CustomInput,
    AlertBox,
    DynamicHome,
    DynamicPosts,
    DynamicArchive
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue', content: '...content...' },
        { id: 2, title: 'Blogging with Vue', content: '...content...' },
        { id: 3, title: 'Why Vue is so fun', content: '...content...' }
      ],
      postFontSize: 1,
      VModel: `
        <input v-model="searchText"> 等价于
        <input
          v-bind:value="searchText"
          v-on:input="searchText = $event.target.value"
        >
      `,
      componentVModel: `
        <custom-input
          v-bind:value="searchText"
          v-on:input="searchText = $event"
        ></custom-input>
      `,
      searchText: '',
      currentTabComponent: 'DynamicHome',
      componentNote: `
        <table>
          <blog-post-row></blog-post-row>
        </table>
        可能会出问题，可以使用is属性解决
        <table>
          <tr is="blog-post-row"></tr>
        </table>
      `
    }
  },
  methods: {
    changeTabComponent(componentName) {
      this.currentTabComponent = componentName
    }
  }
}
</script>

<style>

</style>
