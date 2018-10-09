import Vue from 'vue';
import VueRouter from 'vue-router';
import infiniteScroll from 'vue-infinite-scroll';

import App from './App.vue';
import Homepage from './components/Homepage.vue';
import SoloEntry from './components/SoloEntry.vue';

import Apfelkuchen from './entries/Apfelkuchen.vue';
import Jubilaeum from './entries/Jubilaeum.vue';

import './global.css';

Vue.config.productionTip = false;

Vue.use(infiniteScroll);
Vue.use(VueRouter);


const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Homepage,
    },
    {
      path: '/eintrag',
      component: SoloEntry,
      children: [
        {
          path: 'apfelkuchen',
          component: Apfelkuchen,
        },
        {
          path: 'jubilaeum',
          component: Jubilaeum,
        },
      ],
    },
  ],
});

Vue.component('Apfelkuchen', Apfelkuchen);
Vue.component('Jubilaeum', Jubilaeum);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
