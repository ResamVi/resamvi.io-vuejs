<template>
  <Entry>
    <template slot="date">08. August, 2020</template>
    <template slot="title"><router-link class="nostyle" to="/eintrag/InfclassStats">InfClass Stats</router-link></template>
    <template slot="content">
      <header class="center">
        <p>InfClass Stats</p>
        <img src="@/assets/016_infclassstats/infclass.png" class="img-responsive" loading="lazy">
      </header>

      <p>
        Mit InfClass Stats wird die Spieler Performance getrackt von einem <a href="https://teeworlds.com/">Teeworlds</a> Mod der sich
        <a href="https://github.com/yavl/teeworlds-infclassR">InfectionClass</a> nennt. Die Performance im Game wird getrackt, ausgewertet
        und in Echtzeit im Web dargestellt: <a href="https://stats.resamvi.io/#/">https://stats.resamvi.io/</a>. Weitere Informationen dazu kann in 
        der README in der Repository gelesen werden: <a href="https://github.com/ResamVi/infclass-stats">https://github.com/ResamVi/infclass-stats</a>
      </p>

      <img src="@/assets/016_infclassstats/gameplay.png" class="img-responsive" loading="lazy">
      <p class="center">Beispiel Gameplay von InfectionClass</p>

      <p>
        Ereignisse die im Spiel geschehen werden in der Server-Konsole ausgegeben. Vom Serverbetreiber des Mods erhalte ich Zugriff
        auf die Server-Konsole und kann durch eine External Console (Econ)-Verbindung mir die Ereignisse, die in Echtzeit passieren,
        ansehen und auswerten.
      </p>
      <p>
        Die Software, die in Go geschrieben ist, läuft auf meinem eigenem Server und ist nun dazu dazu da 24/7 Ereignisse abzufangen, 
        abzuspeichern und zu interpretieren.
      </p>
      <p>
        Die Software läuft schon mehrere Jahre und 2019 hatte sie fast ein ganzes Jahr ununterbrochen laufen können. 
        Aus allen abgespeicherten Ereignissen habe ich mal eine gesamte Statistik erstellt - normalerweise werden alle Daten wöchentlich zurückgesetzt,
        um Spielern jede Woche die Möglichkeit zu geben ihre Performance auf's Neue zu beweisen.
      </p>

      <h3 class="center">Hier ist die Infographik</h3>
      <img src="@/assets/016_infclassstats/infographic.png" class="img-responsive" loading="lazy">

    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'InfclassStats',
  components: {
    Entry,
  },
};
</script>
