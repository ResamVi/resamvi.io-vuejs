<template>
  <Entry>
    <template slot="date">1. April, 2017</template>
    <template slot="title"><router-link class="nostyle" to="/eintrag/Start">Zum Start des Blogs</router-link></template>
    <template slot="content">
      <p>Habe ich auch gleichzeitig ein neues Teeworlds Video auf meinem Youtube Channel hochgeladen.</p>

      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" style="margin-top:10px;margin-bottom:10px;" width="560" height="315" src="https://www.youtube.com/embed/b82zRCIfZuc"
          frameborder="0" allowfullscreen></iframe>
      </div>
      <br />

      <p>Ungefähr 13 Stunden wurden in das Video investiert. 15 Minuten hat es gebraucht zum hochladen. 7 Jahre ist es her
        seit meinem ersten Video und 7 Jahre habe ich auch immer nur ein Programm benutzt: Sony Vegas.</p>

      Hier ist's zu Ende weil mit After Effects einfach der Raum an Möglichkeiten unermesslich größer ist.
      <br />
      <br /> Es fängt an mit einfachem Pan/Crop,

      <img src="@/assets/002_start/pancrop.gif" alt="pancrop" class="img-responsive">
      <br />

      <p>denn was hierbei zu Vegas die Sache deutlich besser aussehen lässt sind zusätzliche Optionen Geschwindigkeit und
        Beschleunigung zwischen Keyframes zu optimieren.</p>

      Automatisiertes Motion Tracking,
      <img src="@/assets/002_start/motiontrack.gif" alt="motiontrack" class="img-responsive">
      <br /> damit hinterher der "stehende" Text eingefügt wird. Das
      <a href="http://www.neuwort.de/2009/09/neuwort-kompositionieren/">kompositionieren</a> von roher Footage.
      <br />
      <img src="@/assets/002_start/kompositionieren.png" alt="komposition" class="img-responsive">
      <br />

      <p>Mehrere Clips können in ihrer Position in Relation stehen und lassen sich gemeinsam manipulieren. Das alles trägt
        einfach dazu bei dass ich unendlich viel Spaß habe die ganzen neuen Möglichkeiten auszuprobieren lol.</p>

      <p>Hier bleibt noch viel für mich zu lernen. Schwer ist nur dass uns Teeworlds mit seinem derzeitigen Demo-System zu
        stark limitiert. Eine in-game Kamera die sich manipulieren lässt wäre wirklich der nötige letzte Segen. A man can
        dream.
      </p>
    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'start',
  components: {
    Entry,
  },
};
</script>
