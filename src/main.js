import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';

import App from './App.vue';
import './global.css';

Vue.config.productionTip = false;

Vue.use(infiniteScroll);

new Vue({
  render: h => h(App),
}).$mount('#app');
