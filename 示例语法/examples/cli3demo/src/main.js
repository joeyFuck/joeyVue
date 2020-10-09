import Vue from 'vue' 
import App from './App.vue' 
import router from "./../router.js"
import store from './store'//引入store

Vue.config.productionTip = false
 
new Vue({
  render: h => h(App),
   router,  // 注入到根实例中
   store,//使用store
}).$mount('#app')
