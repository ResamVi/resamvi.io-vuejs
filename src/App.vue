<template>
  <div id="app">
    <HeroHeader />
    <main>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <Apfelkuchen v-if="visible[0]" />
        <AboJubilaeum v-if="visible[1]" />
      </div>
    </main>
  </div>
</template>

<script>
import HeroHeader from './HeroHeader.vue';
import Apfelkuchen from './entries/Apfelkuchen.vue';
import AboJubilaeum from './entries/AboJubilaeum.vue';

export default {
  name: 'app',
  components: {
    HeroHeader,
    Apfelkuchen,
    AboJubilaeum,
  },
  data() {
    return {
      index: 0,
      visible: [false, false],
      busy: false,
    };
  },
  methods: {
    loadMore() {
      this.busy = true;

      setTimeout(() => {
        this.$set(this.visible, this.index, true);
        this.index += 1;
        this.busy = false;
      }, 5000);
    },
  },
};
</script>

<style scoped>
#app {
  margin: 5% 20%;
}
</style>
