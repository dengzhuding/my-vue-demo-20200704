import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 配置axios
const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  // baseURL: 'http://192.168.120.17:8080/',
  timeout: 20000,
  withCredentials: true,
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
