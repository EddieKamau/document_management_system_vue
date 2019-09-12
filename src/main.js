import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'

import { routes } from './routes'

import store from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})


axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.headers.common['Authorization'] = 'Token 008d22b607cf5343a7be25575d3af4d72445b936'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
