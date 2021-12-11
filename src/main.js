import Vue from 'vue'
import App from './App.vue'
console.log(222);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
