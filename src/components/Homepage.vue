<template>
  <div>
    <Header />
    <main>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <Spayle v-if="visible[0]" />
        <Jubilaeum v-if="visible[1]" />
        <Rheinuferlauf17 v-if="visible[2]" />
        <Apfelkuchen v-if="visible[3]" />
        <Charityrun17 v-if="visible[4]" />
        <Kaesekuchen v-if="visible[5]" />
        <Screenbounce v-if="visible[6]" />
        <Bouncingball v-if="visible[7]" />
        <Chocolatechipcookies v-if="visible[8]" />
        <Start v-if="visible[9]" />
        <Erster v-if="visible[10]" />
      </div>
    </main>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'homepage',
  components: {
    Header,
  },
  data() {
    return {
      index: 0,
      visible: [false, false, false, false, false, false, false, false, false, false, false],
      busy: false,
    };
  },
  methods: {
    loadMore() {
      this.busy = true;

      setTimeout(() => {
        if (this.index < this.visible.length) {
          this.$set(this.visible, this.index, true);
          this.index += 1;
          this.busy = false;
        }
      }, 10);
    },
  },
};
</script>
