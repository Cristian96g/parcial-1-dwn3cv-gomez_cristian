import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  /**
   * Router de Vue Router.
   * @type {Object}
   */
  router,

    /**
   * Método que se ejecuta al crear la instancia de Vue.
   * @method created
   */
  created() {
    this.$store.dispatch("iniciarStore");
  }
}).$mount('#app')


import "bootstrap/dist/js/bootstrap.js";