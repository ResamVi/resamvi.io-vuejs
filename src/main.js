import Vue from 'vue';
import VueRouter from 'vue-router';
import infiniteScroll from 'vue-infinite-scroll';

import App from './App.vue';
import Homepage from './components/Homepage.vue';
import SoloEntry from './components/SoloEntry.vue';
import AboutUs from './components/AboutUs.vue';

import Spayle from './entries/Spayle.vue';
import Jubilaeum from './entries/Jubilaeum.vue';
import Rheinuferlauf17 from './entries/Rheinuferlauf17.vue';
import Apfelkuchen from './entries/Apfelkuchen.vue';
import Charityrun17 from './entries/Charityrun17.vue';
import Kaesekuchen from './entries/Kaesekuchen.vue';
import Screenbounce from './entries/Screenbounce.vue';
import Bouncingball from './entries/Bouncingball.vue';
import Chocolatechipcookies from './entries/Chocolatechipcookies.vue';
import Start from './entries/Start.vue';
import Erster from './entries/Erster.vue';
import Ytpmv from './entries/Ytpmv.vue';

import './global.css';

Vue.config.productionTip = false;

Vue.use(infiniteScroll);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Homepage },
    { path: '/impressum', component: AboutUs },
    {
      path: '/eintrag',
      component: SoloEntry,
      children: [
        { path: 'spayle', component: Spayle },
        { path: 'jubilaeum', component: Jubilaeum },
        { path: 'rheinuferlauf', component: Rheinuferlauf17 },
        { path: 'apfelkuchen', component: Apfelkuchen },
        { path: 'charityrun', component: Charityrun17 },
        { path: 'kaesekuchen', component: Kaesekuchen },
        { path: 'screenbounce', component: Screenbounce },
        { path: 'bouncingball', component: Bouncingball },
        { path: 'chocolatechipcookies', component: Chocolatechipcookies },
        { path: 'start', component: Start },
        { path: 'erster', component: Erster },
        { path: 'ytpmv', component: Ytpmv },
      ],
    },
  ],
});

Vue.component('Spayle', Spayle);
Vue.component('Jubilaeum', Jubilaeum);
Vue.component('Rheinuferlauf17', Rheinuferlauf17);
Vue.component('Apfelkuchen', Apfelkuchen);
Vue.component('Charityrun17', Charityrun17);
Vue.component('Kaesekuchen', Kaesekuchen);
Vue.component('Screenbounce', Screenbounce);
Vue.component('Bouncingball', Bouncingball);
Vue.component('Chocolatechipcookies', Chocolatechipcookies);
Vue.component('Start', Start);
Vue.component('Erster', Erster);
Vue.component('Ytpmv', Ytpmv);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
