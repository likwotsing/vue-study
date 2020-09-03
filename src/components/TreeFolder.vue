<template>
  <p>
    <span>{{ folder.name }}</span>
    <tree-folder-contents :children="folder.children" />
  </p>
</template>

<script>
// 这样做会报错：
// import TreeFolderContents from '@/components/TreeFolderContents.vue'
export default {
  name: 'TreeFolder',
  components: {
    // 这是1种解决办法
    // TreeFolderContents: () => import('@/components/TreeFolderContents.vue')
  },
  props: ['folder'],
  beforeCreate() {
    // 这是另一种解决办法
    this.$options.components.TreeFolderContents = require('@/components/TreeFolderContents.vue').default
  }
}
</script>

<style>

</style>
