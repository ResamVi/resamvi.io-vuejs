<template>
  <Entry>
    <template slot="date">20. April, 2017</template>
    <template slot="title">Bounce across screen</template>
    <template slot="content">
      Zweite Übung:
      <img src="@/assets/screenbounce/challenge2.jpg" alt="challenge descr" class="img-responsive center"> Was konnte
      ich dabei lernen?
      <br /> Mit dem Line Tool lassen sich auch "Motion Paths" erstellen.
      <br />
      <br /> Man zeichnet einfach seine Spur, bewegt seinen Ball zur Anfang der Spur und ordnet die Ebene mit dem Ball
      dem Guide
      Layer mit der Spur unter.

      <img src="@/assets/screenbounce/trail.jpg" alt="bounce across screen" class="img-responsive">

      <img src="@/assets/screenbounce/combined.jpg" alt="bounce across screen" class="img-responsive">
      <br /> Voilà.

      <img src="@/assets/screenbounce/ballacross.gif" alt="bounce across screen" class="img-responsive">
    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'Screenbounce',
  components: {
    Entry,
  },
};
</script>
