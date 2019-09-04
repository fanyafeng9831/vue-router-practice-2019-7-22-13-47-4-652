import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router/router.js'

new Vue({
  render: h => h(App),
    store,
    router
}).$mount('#app')
