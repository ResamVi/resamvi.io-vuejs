<template>
  <div>
    <Header />
    <main>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
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
import Header from './Header.vue';

const ENTRY_COUNT = 12;
export default {
  name: 'homepage',
  components: {
    Header,
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
