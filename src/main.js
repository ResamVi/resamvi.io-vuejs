import Vue from 'vue';
import VueRouter from 'vue-router';
import infiniteScroll from 'vue-infinite-scroll';

import App from './App.vue';
import Homepage from './components/Homepage.vue';
import AboutUs from './components/AboutUs.vue';

import './global.css';

import { routes as entries } from './entries';

Vue.config.productionTip = false;

Vue.use(infiniteScroll);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Homepage },
    { path: '/impressum', component: AboutUs },
    ...entries,
  ],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
