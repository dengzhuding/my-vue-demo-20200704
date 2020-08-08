import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 配置axios
const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  timeout: 20000,
  headers: {
    'X-Custom-Header': 'docker-node-proxy'
  }
})
Vue.prototype.$axios = instance

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
