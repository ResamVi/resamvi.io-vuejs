<template>
  <Entry>
    <template slot="date">5. September, 2017</template>
    <template slot="title">100 Abonennenten</template>
    <template slot="content">
      <p>Ich hab 100 Abonennten gekriegt, dazu ein Video voll mit Memes gemacht.</p>

      <p>Dies sollte eigentlich ein Video werden worin minimaler Aufwand reingesteckt wurde. Eigentlich sollte es
        wenig mit
        Teeworlds zu tun haben und nur ein dump meiner edits werden. Stellt sich heraus als ich das Video mit
        memes würzen
        wollte, dass beides nicht mehr zutraf.</p>

      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" style="margin-top:10px;margin-bottom:10px;" width="560" height="315" src="https://www.youtube.com/embed/2Syx6_v-Wuc"
          frameborder="0" allowfullscreen></iframe>
      </div>
      <br />

      <h3>Meme Liste</h3>
      <ol>
        <li>doge speak</li>
        <li>sanic gotta go fast</li>
        <li>boom watcha say</li>
        <li>guile theme goes with everything</li>
      </ol>
      <h3>Gescrappt</h3>
      <ol>
        <li>cool guys don't look at explosions</li>
        <li>Phoenix Wright </li>
        <li>how do you spell my 'Armadillo'</li>
      </ol>

      <p>Was den größten Aufwand hatte war der Ip Man Clip.</p>
      <img src="@/assets/jubilaeum/motion.png" alt="apfelkuchen" class="img-responsive center">
      <p>Die Linie im Bild entsprach der Bewegung des Nametags für 15 Sekunden. 1:40 Minuten war der Clip.
        Arghhh.</p>

      <p>Was für den Computer den größten Aufwand hatte waren all die doge pics. Waren locker 20 Crashs für das
        Projekt. ARRGHHH.</p>
      <img src="@/assets/jubilaeum/doge.png" alt="apfelkuchen" class="img-responsive center">
      <p>Jedes "Level" ist eine Komposition. Ich hatte exponentiellen Wachstum an doge faces. Mitgezählt hab ich
        nicht mehr,
        sorry.
      </p>
    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'jubilaeum',
  components: {
    Entry,
  },
};
</script>
