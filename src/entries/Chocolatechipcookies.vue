<template>
  <Entry>
    <template slot="date">14. April, 2017</template>
    <template slot="title">Bouncing ball</template>
    <template slot="content">
      <img src="@/assets/bouncingball/challenge1.jpg" alt="challenge descr" class="img-responsive"> Alles klar.
      <img src="@/assets/bouncingball/ballbounce.gif" alt="bouncing ball" class="img-responsive" /> Leicht erkennbar,
      in drei Schritten: Fundamentale Bewegung zuerst, Beschleunigung danach,
      <a href="https://en.wikipedia.org/wiki/Squash_and_stretch">Squash and Stretch</a> Prinzip zuletzt. Erledigt.
    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'Chocolatechipcookies',
  components: {
    Entry,
  },
};
</script>
