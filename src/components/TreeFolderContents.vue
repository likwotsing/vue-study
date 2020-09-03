<template>
  <ul>
    <li v-for="(child, index) of children" :key="index">
      <tree-folder v-if="child.children" :folder="child"></tree-folder>
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
import TreeFolder from '@/components/TreeFolder.vue'
export default {
  name: 'TreeFolderContents',
  components: {
    TreeFolder
  },
  props: ['children']
}
</script>

<style>

</style>
