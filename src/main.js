import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.config.productionTip = false

const requireComponent = require.context(
  './components', // 组件目录的相对路径
  false, // 是否查询子目录
  /Base[A-Z]\w+\.(vue|js)$/ // 匹配基础组件文件名的正则表达式
)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 获取组件的PascalCase命名
  const componentName = upperFirst(
    camelCase(
      // fileName.split('/').pop().replace(/\.\w+$/, '')
      fileName.split('/').pop().replace(/\.(vue|js)$/, '')
    )
  )
  // 全局注册
  Vue.component(
    componentName,
    // 如果组件是通过export default导出的，会优先使用.default
    componentConfig.default || componentConfig
  )
})

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
