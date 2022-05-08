<template>
  <Entry>
    <template slot="date">8. Mai, 2022</template>
    <template slot="title"
    ><router-link class="nostyle" to="/eintrag/badischemeile22"
    >Badische Meile 2022</router-link
    ></template
    >
    <template slot="content">
      <p>
        Nach 2 Jahren Corona konnte wieder die Badische Meile stattfinden. <br/>
        Ab geht's früh los bevor die 4000 Teilnehmer kommen die üblicherweise daran Teilnehmen
      </p>

      <p>Die Strecke</p>
      <img
          src="@/assets/018_badischemeile22/strecke.png"
          alt="thumbnail"
          class="img-responsive"
      />

      <p class="center">Weit abseits vom Start am Europabad hatte ich mein Warmup</p>
      <table class="no-border">
        <tr>
          <td><h4 class="center">8:00</h4></td>
          <td><h4 class="center">9:30</h4></td>
        </tr>
        <tr>
          <td>
            <img
                src="@/assets/018_badischemeile22/a_leer.jpg"
                class="img-responsive"
                style="width:720px;"
            />
          </td>
          <td>
            <img
                src="@/assets/018_badischemeile22/a_voll.jpg"
                class="img-responsive"
                style="width:720px;"
            />
          </td>
        </tr>
      </table>
      <br />

      <p class="center">Blick auf Mount Klotz</p>
      <table class="no-border">
        <tr>
          <td><h4 class="center">8:00</h4></td>
          <td><h4 class="center">9:44</h4></td>
        </tr>

        <tr>
          <td>
            <img
                src="@/assets/018_badischemeile22/b_leer.jpg"
                class="img-responsive"
                style="width:720px;"
            />
          </td>
          <td>
            <img
                src="@/assets/018_badischemeile22/b_voll.jpg"
                class="img-responsive"
                style="width:720px;"
            />
          </td>
        </tr>
      </table>

      <p class="center">Und die Krönung</p>

      <p>8:00</p>
      <video class="center vid" controls loop muted>
        <source src="@/assets/018_badischemeile22/ziel_davor.mp4" type="video/webm" /> Your browser does not support the video tag.
      </video>

      <p>Nach dem Rennen</p>
      <video class="center vid" controls loop muted>
        <source src="@/assets/018_badischemeile22/ziel_danach.mp4" type="video/webm" /> Your browser does not support the video tag.
      </video>

      <p>Aber zurück zum Anfang: Erstmal Startnummern holen</p>
      <img
          src="@/assets/018_badischemeile22/startnummer_holen.jpg"
          alt="thumbnail"
          class="img-responsive"
      />

      <p>Hier meine. Ein T-Shirt gibts auch dazu. Wahl war zwischen Violett, Gelb, Rot und Grün.</p>
      <img
          src="@/assets/018_badischemeile22/startnummer.jpg"
          alt="thumbnail"
          class="img-responsive"
      />

      <p>Es wird auch schon immer voller. T minus 40 bis Startschuss</p>
      <img
          src="@/assets/018_badischemeile22/voller.jpg"
          alt="thumbnail"
          class="img-responsive"
      />

      <p>
        Start in zwei Gruppen. Ich war in der zweiten Gruppe und hier ist die Aufnahme vom ersten Start:
      </p>
      <video class="center" controls loop muted>
        <source src="@/assets/018_badischemeile22/erster_start.mp4" type="video/webm" /> Your browser does not support the video tag.
      </video>

      <p>
        Der Startschuss kommt und man steht erstmal noch für weitere 3min lol
      </p>

      <p>
        Zum Lauf: Ich stand beim Start halt ziemlich weit hinten und war eigentlich permanent beschäftigt Leute zu überholen<br/>
        Ist also schwierig einen konstanten Pace zu halten. Guckt euch das an LOL:
      </p>
      <img
          src="@/assets/018_badischemeile22/bm_pace.png"
          alt="thumbnail"
          class="img-responsive"
      />

      <p>Und jetzt im Vergleich zu etwas Normalem (Schlossparklauf 2018)</p>
      <img
          src="@/assets/014_schlossparklauf18/graph.png"
          alt="thumbnail"
          class="img-responsive"
      />

      <p>Welcher Platz? Idk (Stand 8.Mai)</p>
    </template>
  </Entry>
</template>

<script>
import Entry from "@/components/Entry.vue";

export default {
  name: "badischemeile22",
  components: {
    Entry,
  },
};
</script>

<style scoped>
.no-border {
  border: none;
  border-collapse: collapse;
}

.no-border td {
  border: none;
}

.no-border tr {
  border: none;
}

table {
  vertical-align: middle;
}

.vid {
  width: 100%;
  max-height: 100%;
}
</style>
