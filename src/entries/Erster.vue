<template>
  <Entry>
    <template slot="date">29. März, 2017</template>
    <template slot="title"><router-link class="nostyle" to="/eintrag/Erster">Erster Eintrag</router-link></template>
    <template slot="content">
      The purpose of today's training is to defeat yesterday's understanding.
    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'erster',
  components: {
    Entry,
  },
};
</script>
