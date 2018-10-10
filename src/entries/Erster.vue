<template>
  <Entry>
    <template slot="date">29. März, 2017</template>
    <template slot="title">Erster Eintrag</template>
    <template slot="content">
      The purpose of today's training is to defeat yesterday's understanding.
    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'Bouncinball',
  components: {
    Entry,
  },
};
</script>
