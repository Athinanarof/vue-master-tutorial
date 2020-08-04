import Vue from 'vue'
import App from './App.vue'
import router from './router' // Import our router.js -> This is to navitage in different pages in our app
import store from './store'

Vue.config.productionTip = false

new Vue({
  router, // ES6 equivalent to router: router
  store,
  render: h => h(App)
}).$mount('#app')
