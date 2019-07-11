// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import vuetify from 'vuetify'

Vue.use(BootstrapVue);
Vue.use(vuetify);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
window.$ = require('jquery');
window.JQuery = require('jquery');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
