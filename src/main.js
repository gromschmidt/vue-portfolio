import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {VueMasonryPlugin} from 'vue-masonry'
import VueRellax from 'vue-rellax'


Vue.use(VueMasonryPlugin)
Vue.use(VueRellax)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
