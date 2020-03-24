// vue构造函数
import Vue from 'vue'
//app组件（以vue结尾的文件都是组件）
import App from './App.vue'
//路由对象
import router from './router'
//上线环境是否提示信息
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
