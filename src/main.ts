import Vue from 'vue';
import App from './App.vue';
import router from './router';

import setupPlugin from '@/plugins/setup-plugin';

Vue.config.productionTip = false;


new Vue({
  ...setupPlugin(),
  router,
  render: (h) => h(App),
}).$mount('#app');
