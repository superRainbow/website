import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import ElementUI from 'element-ui';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '@/assets/scss/index.scss';
import router from '@/router/router';
import store from '@/store/store';
import App from '@/App.vue';

library.add(fas, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
