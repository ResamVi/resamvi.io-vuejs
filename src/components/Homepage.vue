<template>
  <div>
    <Header />
    <main>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <Apfelkuchen v-if="visible[0]" />
        <Jubilaeum v-if="visible[1]" />
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
      }, 10);
    },
  },
};
</script>

<style scoped>

</style>