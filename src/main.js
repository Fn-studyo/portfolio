import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueMeta from 'vue-meta'
import './assets/tailwind.css'
import 'flowbite';

Vue.config.productionTip = false;


Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
