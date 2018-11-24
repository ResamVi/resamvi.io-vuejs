<template>
  <div>
    <Header />
    <main>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <component
          v-for="i in entries.length"
          :key="i"
          :is="entries[i]"
          v-if="visible[i]" />
      </div>
    </main>
  </div>
</template>

<script>
import { order as entries } from '@/entries';
import Header from './Header.vue';

export default {
  name: 'homepage',
  components: { 
    Header,
  },
  data() {
    return {
      index: -1, // -1 = No entries are shown
      visible: new Array(entries.length).fill(false),
      busy: false,
      entries,
    };
  },
  methods: {
    loadMore() {
      this.busy = true;

      setTimeout(() => {
        this.$set(this.visible, this.index, true); // arrays cannot be set directly responsively in vue
        this.index += 1;
        this.busy = false;
      }, 10);
    },
  },
};
</script>
