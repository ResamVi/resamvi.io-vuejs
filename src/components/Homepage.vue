<template>
  <div>
    <Header />
    <main>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <Schlossparklauf18 v-if="visible[13]" />
        <Ytpmv v-if="visible[12]" />
        <Pastmemories v-if="visible[11]" />
        <Spayle v-if="visible[10]" />
        <Jubilaeum v-if="visible[9]" />
        <Rheinuferlauf17 v-if="visible[8]" />
        <Apfelkuchen v-if="visible[7]" />
        <Charityrun17 v-if="visible[6]" />
        <Kaesekuchen v-if="visible[5]" />
        <Screenbounce v-if="visible[4]" />
        <Bouncingball v-if="visible[3]" />
        <Chocolatechipcookies v-if="visible[2]" />
        <Start v-if="visible[1]" />
        <Erster v-if="visible[0]" />
      </div>
    </main>
  </div>
</template>

<script>
import Schlossparklauf18 from '@/entries/Schlossparklauf18.vue';
import Pastmemories from '@/entries/Pastmemories.vue';
import Spayle from '@/entries/Spayle.vue';
import Jubilaeum from '@/entries/Jubilaeum.vue';
import Rheinuferlauf17 from '@/entries/Rheinuferlauf17.vue';
import Apfelkuchen from '@/entries/Apfelkuchen.vue';
import Charityrun17 from '@/entries/Charityrun17.vue';
import Kaesekuchen from '@/entries/Kaesekuchen.vue';
import Screenbounce from '@/entries/Screenbounce.vue';
import Bouncingball from '@/entries/Bouncingball.vue';
import Chocolatechipcookies from '@/entries/Chocolatechipcookies.vue';
import Start from '@/entries/Start.vue';
import Erster from '@/entries/Erster.vue';
import Ytpmv from '@/entries/Ytpmv.vue';
import Header from './Header.vue';

const ENTRY_COUNT = 13;

export default {
  name: 'homepage',
  components: {
    Header,
    Schlossparklauf18,
    Pastmemories,
    Spayle,
    Jubilaeum,
    Rheinuferlauf17,
    Apfelkuchen,
    Charityrun17,
    Kaesekuchen,
    Screenbounce,
    Bouncingball,
    Chocolatechipcookies,
    Start,
    Erster,
    Ytpmv,
  },
  data() {
    return {
      index: ENTRY_COUNT,
      visible: new Array(ENTRY_COUNT).fill(false),
      busy: false,
    };
  },
  methods: {
    loadMore() {
      this.busy = true;

      setTimeout(() => {
        if (this.index >= 0) {
          this.$set(this.visible, this.index, true);
          this.index -= 1;
          this.busy = false;
        }
      }, 10);
    },
  },
};
</script>
