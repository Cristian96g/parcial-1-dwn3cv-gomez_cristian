import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),

  /**
   * Router de Vue Router.
   * @type {Object}
   */
  router,

  vuetify,

  /**
 * Método que se ejecuta al crear la instancia de Vue.
 * @method created
 */
  created() {
    this.$store.dispatch("iniciarStore");
  }
}).$mount('#app')


import vuetify from './plugins/vuetify'